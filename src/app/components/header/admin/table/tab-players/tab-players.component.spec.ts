import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabPlayersComponent } from './tab-players.component';

describe('TabPlayersComponent', () => {
  let component: TabPlayersComponent;
  let fixture: ComponentFixture<TabPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
