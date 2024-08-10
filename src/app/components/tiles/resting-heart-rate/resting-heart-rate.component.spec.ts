import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestingHeartRateComponent } from './resting-heart-rate.component';

describe('RestingHeartRateComponent', () => {
  let component: RestingHeartRateComponent;
  let fixture: ComponentFixture<RestingHeartRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestingHeartRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestingHeartRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
