import { Component, OnInit } from '@angular/core';
import { LoginCredsService } from '../login-creds.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css']
})
export class LoginCardComponent implements OnInit {
  buttonLabel:string = "Signing...";
  isClicked:boolean = false;
  userName:string = "";
  isLoggedIn:boolean = true;
  password:string = "";
  data:any;
  constructor(private credService:LoginCredsService) { }

  ngOnInit(): void {
  }

  validate() {
    this.isClicked = true;
    setTimeout(() => {this.isClicked = false ; this.isLoggedIn = false; }, 2000);
    this.credService.getUser().subscribe((data) => {
      this.data = data;
      console.log(data);
      
    });
    
  }

}
