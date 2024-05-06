import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupEventsComponent } from './cup-events.component';

describe('CupEventsComponent', () => {
  let component: CupEventsComponent;
  let fixture: ComponentFixture<CupEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CupEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
