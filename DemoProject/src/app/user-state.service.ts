import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserStateService {
  private user  = new BehaviorSubject(new User('User',false,false));

  user$ = this.user.asObservable();
  constructor() { }

  changeUserState(user:User) {
    this.user.next(user);
  }  
}
