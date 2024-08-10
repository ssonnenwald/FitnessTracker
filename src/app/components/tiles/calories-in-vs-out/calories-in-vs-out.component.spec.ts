import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriesInVsOutComponent } from './calories-in-vs-out.component';

describe('CaloriesInVsOutComponent', () => {
  let component: CaloriesInVsOutComponent;
  let fixture: ComponentFixture<CaloriesInVsOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaloriesInVsOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriesInVsOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
