import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { LoginCredsService } from '../login-creds.service';

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
  constructor(private credService:LoginCredsService) { }

  ngOnInit(): void {
  }

  hideEvent() {
    this.hideLoginCard.emit(false);
    
  }

  registerNewUser() {
    let userData = {username: "Piggu03", password: "bulbul"};
    this.credService.registerUser(userData).subscribe(data => {
      console.log("Added");
    });
  }

  loginCreds(){
    this.isClicked = true;
    this.credService.getUserByuserName(this.userName).subscribe((data) => {
      if(data[0].password == this.password) {
        setTimeout(() => {this.isClicked = false ; this.isLoggedIn = true; }, 2000);
      }
      this.activeUser = data;  
      this.hideEvent();  
    });
  }

}
