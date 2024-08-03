import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { map, takeUntil, tap } from 'rxjs';

import { MealTypes } from '../../models/enums/meal-types';
import { FitbitService } from '../../services/fitbit.service';
import { OnDestroyBaseComponent } from '../on-destroy-base-component/on-destroy-base-component';

@Component({
  selector: 'app-food-log',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './food-log.component.html',
  styleUrl: './food-log.component.css',
})
export class FoodLogComponent extends OnDestroyBaseComponent implements OnInit {
  public fitbitData: string | any = '';
  private fitbitService: FitbitService = inject(FitbitService);

  public gridOptions: GridOptions = {
    defaultColDef: {
      resizable: true,
      sortable: true,
      width: 125,
      minWidth: 125,
      filter: 'agTextColumnFilter',
    },
    columnDefs: [
      {
        headerName: 'logId',
        field: 'logId',
        hide: true,
      },
      {
        headerName: 'Meal Type',
        field: 'mealTypeId',
        valueGetter: (params): string => {
          return MealTypes[params.data.mealTypeId];
        },
        minWidth: 150,
      },
      {
        headerName: 'Name',
        field: 'name',
        minWidth: 450,
      },
      {
        headerName: 'Brand',
        field: 'brand',
        minWidth: 200,
      },
      {
        headerName: 'Calories',
        field: 'calories',
        filter: 'agNumberColumnFilter',
        flex: 1,
      },
    ],
  };

  public constructor() {
    super();
  }

  public ngOnInit(): void {
    this.fitbitService
      .getFoodLog('2024-08-02')
      .pipe(
        tap((data) => console.log(data)),
        map((data) =>
          data.foods.map((data) => {
            return {
              logId: data.logId,
              mealTypeId: data.loggedFood.mealTypeId,
              name: data.loggedFood.name,
              brand: data.loggedFood.brand,
              calories: data.loggedFood.calories,
            };
          })
        ),
        takeUntil(this.destroy)
      )
      .subscribe((data) => {
        this.fitbitData = data;
      });
  }
}
