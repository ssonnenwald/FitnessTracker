import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { Period } from '../../models/enums/period';
import { FitbitService } from '../../services/fitbit.service';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  public fitbitData: string | any = '';
  private fitbitService: FitbitService = inject(FitbitService);

  public ngOnInit(): void {
    const date: string = '2024-07-27';

    this.fitbitService
      .getWeightLogsWithPeriod(date, Period.THIRTYDAYS)
      .subscribe((data) => {
        this.fitbitData = data;
      });
  }
}
