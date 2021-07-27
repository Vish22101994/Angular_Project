import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolBarCompComponent } from './tool-bar-comp.component';

describe('ToolBarCompComponent', () => {
  let component: ToolBarCompComponent;
  let fixture: ComponentFixture<ToolBarCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolBarCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolBarCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
