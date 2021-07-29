import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { LoginCredsService } from '../login-creds.service';
import { User } from '../user';
import { UserStateService } from '../user-state.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
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
  hide:boolean = true;
  constructor(private credService:LoginCredsService,private userState:UserStateService,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

  loginCreds(){
    this.isClicked = true;
    this.credService.getUserByuserName(this.userName).subscribe((data) => {
      console.log(data);
    if(data.length != 0 && data[0].password == this.password){
        setTimeout(() => {this.isClicked = false ; this.isLoggedIn = true; }, 100);
        this.activeUser = data;
        this.userState.changeUserState(new User(data[0].username,true,true));
        this._snackBar.open("Succefully Logged In !!","close");
        setTimeout(() => this._snackBar.dismiss(),3000); 
    } else {
      this.isClicked = false;
      this._snackBar.open("Login failed !! Please Provide Correct Credentials","close");
       setTimeout(() => this._snackBar.dismiss(),3000); 
    }
        
    });
  }

}
