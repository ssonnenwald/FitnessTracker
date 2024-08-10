import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBadgesComponent } from './top-badges.component';

describe('TopBadgesComponent', () => {
  let component: TopBadgesComponent;
  let fixture: ComponentFixture<TopBadgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopBadgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopBadgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
