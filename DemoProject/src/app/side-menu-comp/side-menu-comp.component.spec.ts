import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuCompComponent } from './side-menu-comp.component';

describe('SideMenuCompComponent', () => {
  let component: SideMenuCompComponent;
  let fixture: ComponentFixture<SideMenuCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
