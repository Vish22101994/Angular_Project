import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../user-state.service';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-user-card-m',
  templateUrl: './user-card-m.component.html',
  styleUrls: ['./user-card-m.component.css']
})

export class UserCardMComponent implements OnInit {

  userName:string = "";
  constructor(private service:UserStateService,private router:Router) { 

  }



  ngOnInit(): void {
    this.service.user$.subscribe(res => {
      this.userName = res.usernName;
    });
  }


  signOut() {
    //navgating to the home page and sign out logic (using .navigate() or .navigateByUrl())
    this.router.navigate(['/home']);
    this.service.changeUserState(new User('User' , false,true));
  }

}
