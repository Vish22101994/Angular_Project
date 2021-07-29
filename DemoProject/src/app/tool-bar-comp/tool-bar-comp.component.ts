import { Component, OnInit,Input,ElementRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { UserStateService } from '../user-state.service';
@Component({
  selector: 'app-tool-bar-comp',
  templateUrl: './tool-bar-comp.component.html',
  styleUrls: ['./tool-bar-comp.component.css']
})
export class ToolBarCompComponent implements OnInit {

  @Input()
  drawer:any;

  @Input()
  isLoggedIn:boolean = false;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 100;
  bufferValue = 75;
  welcomeMssg:string = "";
  currentDate:Date = new Date();

  constructor(private userState:UserStateService) {  }

  ngOnInit(): void {
    
   // toggling drawer button  based on isToggle:boolean state
    this.userState.user$.subscribe(res => {
      if(res.isToggle == true) {
        this.drawer.toggle();
      }
    });
 
    // After Login :  remove sign in / sign up button And displaying welcome mssg
    this.userState.user$.subscribe(res => {
        this.isLoggedIn = res.isLoggedIn;
        this.welcomeMssg = res.usernName + " : Welcome to Angular Project App";  
    });
  }



}
