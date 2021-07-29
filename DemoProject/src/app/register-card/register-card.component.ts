import { Component, OnInit } from '@angular/core';
import { LoginCredsService } from '../login-creds.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router'; 
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
  hide:boolean = true;
  constructor(private credService:LoginCredsService,private _snackBar:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
  }

  registerNewUser() {
    this.isClicked = true;

    this.credService.getUserByuserName(this.userName).subscribe((res) => {
        if(res.length ==  0) {
          if(this.password == this.cPassword) {
            let userData = {username: this.userName, password: this.password};
            this.credService.registerUser(userData).subscribe(data => {
              setTimeout(() => {
                this.isClicked = false;
                this.router.navigate(['/userLogin']);
              },100);
              this._snackBar.open("PRegistered Succesfully !!! Please Login To continue.....","close");
              setTimeout(() => this._snackBar.dismiss(),3000); 
            });
          } else  {
            this.isClicked = false;
            this._snackBar.open("Password mismatch !! Please try again","close");
             setTimeout(() => this._snackBar.dismiss(),3000); 
          }
        } else {
          this.isClicked = false;
          this._snackBar.open("Username not available !!! try different username","close");
           setTimeout(() => this._snackBar.dismiss(),3000); 
        }
       
    });

    
  }


}
