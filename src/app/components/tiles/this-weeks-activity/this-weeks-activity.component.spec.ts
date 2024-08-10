import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisWeeksActivityComponent } from './this-weeks-activity.component';

describe('ThisWeeksActivityComponent', () => {
  let component: ThisWeeksActivityComponent;
  let fixture: ComponentFixture<ThisWeeksActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThisWeeksActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThisWeeksActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
