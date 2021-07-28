import { Component, OnInit } from '@angular/core';
import { LoginCredsService } from '../login-creds.service';
@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.css']
})
export class RegisterCardComponent implements OnInit {

  buttonLabel:string = "Signing Up.....";
  isClicked:boolean = false;
  userName:string = "";
  cPassword:string ="";
  password:string = "";
  
  constructor(private credService:LoginCredsService) { }

  ngOnInit(): void {
  }

  registerNewUser() {
    this.isClicked = true;
    if(this.password == this.cPassword) {
      let userData = {username: this.userName, password: this.password};
      this.credService.registerUser(userData).subscribe(data => {
        setTimeout(() => {
          this.isClicked = false;
        },2000);
        console.log("Added");
      });
    }
  }


}
