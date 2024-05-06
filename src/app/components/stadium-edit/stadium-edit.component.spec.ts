import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StadiumEditComponent } from './stadium-edit.component';

describe('StadiumEditComponent', () => {
  let component: StadiumEditComponent;
  let fixture: ComponentFixture<StadiumEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StadiumEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StadiumEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
