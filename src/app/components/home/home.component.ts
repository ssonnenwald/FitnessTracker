import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { OnDestroyBaseComponent } from '../on-destroy-base-component/on-destroy-base-component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends OnDestroyBaseComponent implements OnInit {
  public constructor() {
    super();
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  public ngOnInit(): void {}
}
