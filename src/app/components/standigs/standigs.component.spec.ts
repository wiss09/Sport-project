import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandigsComponent } from './standigs.component';

describe('StandigsComponent', () => {
  let component: StandigsComponent;
  let fixture: ComponentFixture<StandigsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandigsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
