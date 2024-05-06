import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumCardComponent } from './stadium-card.component';

describe('StadiumCardComponent', () => {
  let component: StadiumCardComponent;
  let fixture: ComponentFixture<StadiumCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadiumCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadiumCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
