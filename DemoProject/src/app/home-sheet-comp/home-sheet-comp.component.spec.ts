import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSheetCompComponent } from './home-sheet-comp.component';

describe('HomeSheetCompComponent', () => {
  let component: HomeSheetCompComponent;
  let fixture: ComponentFixture<HomeSheetCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSheetCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSheetCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
