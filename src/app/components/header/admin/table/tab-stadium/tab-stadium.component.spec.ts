import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStadiumComponent } from './tab-stadium.component';

describe('TabStadiumComponent', () => {
  let component: TabStadiumComponent;
  let fixture: ComponentFixture<TabStadiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabStadiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabStadiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
