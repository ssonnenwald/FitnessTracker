import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { FitbitService } from '../../services/fitbit.service';
import { OnDestroyBaseComponent } from '../on-destroy-base-component/on-destroy-base-component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent extends OnDestroyBaseComponent implements OnInit {
  public fitbitData: string | any = '';
  private fitbitService: FitbitService = inject(FitbitService);

  public constructor() {
    super();
  }

  public ngOnInit(): void {
    this.fitbitService.getFoodLog('2024-08-02').subscribe((data) => {
      this.fitbitData = data;
    });
  }
}
