import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { LoginCredsService } from '../login-creds.service';
import { User } from '../user';
import { UserStateService } from '../user-state.service';
@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {

  @Output()
  hideLoginCard:EventEmitter<boolean> = new EventEmitter<boolean>();

  buttonLabel:string = "Signing...";
  isClicked:boolean = false;
  userName:string = "";
  isLoggedIn:boolean = false;
  password:string = "";
  activeUser:any;
  constructor(private credService:LoginCredsService,private userState:UserStateService) { }

  ngOnInit(): void {
  }

  loginCreds(){
    this.isClicked = true;
    this.credService.getUserByuserName(this.userName).subscribe((data) => {
      if(data[0].password == this.password) {
        setTimeout(() => {this.isClicked = false ; this.isLoggedIn = true; }, 100);
      }
      this.activeUser = data;
      this.userState.changeUserState(new User(data[0].username,true,false));   
    });
  }

}
