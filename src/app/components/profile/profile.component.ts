import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';

import { FitbitService } from '../../services/fitbit.service';
import { OnDestroyBaseComponent } from '../on-destroy-base-component/on-destroy-base-component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent extends OnDestroyBaseComponent implements OnInit {
  public fitbitData: string | any = '';
  private fitbitService: FitbitService = inject(FitbitService);

  public constructor() {
    super();
  }

  public ngOnInit(): void {
    this.fitbitService.getProfile().subscribe((data) => {
      this.fitbitData = data;
    });
  }
}
