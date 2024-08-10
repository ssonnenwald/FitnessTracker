import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentExerciseComponent } from './recent-exercise.component';

describe('RecentExerciseComponent', () => {
  let component: RecentExerciseComponent;
  let fixture: ComponentFixture<RecentExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentExerciseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
