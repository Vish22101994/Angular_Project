import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardMComponent } from './user-card-m.component';

describe('UserCardMComponent', () => {
  let component: UserCardMComponent;
  let fixture: ComponentFixture<UserCardMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
