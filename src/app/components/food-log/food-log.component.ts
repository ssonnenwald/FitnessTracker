import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepicker, MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AgGridAngular } from 'ag-grid-angular';
import { GridOptions } from 'ag-grid-community';
import { map, takeUntil, tap } from 'rxjs';

import { MealTypes } from '../../models/enums/meal-types';
import { FitbitService } from '../../services/fitbit.service';
import { OnDestroyBaseComponent } from '../on-destroy-base-component/on-destroy-base-component';

@Component({
  selector: 'app-food-log',
  standalone: true,
  imports: [
    CommonModule,
    AgGridAngular,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './food-log.component.html',
  styleUrl: './food-log.component.css',
  providers: [provideNativeDateAdapter()],
})
export class FoodLogComponent extends OnDestroyBaseComponent implements OnInit {
  @ViewChild('datePicker') public datePicker: MatDatepicker<any> | undefined;
  public fitbitData: any = [];
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
    console.log('ngOnInit');
  }

  public dateChange(event: MatDatepickerInputEvent<any>): void {
    this.fitbitService
      .getFoodLog(event.value.toISOString().slice(0, 10))
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
