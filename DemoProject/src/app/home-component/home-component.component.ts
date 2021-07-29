import { Component, OnInit } from '@angular/core';
import { UserStateService } from '../user-state.service';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { HomeSheetCompComponent } from '../home-sheet-comp/home-sheet-comp.component';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  isEnabled:boolean = false;
  constructor(private service:UserStateService,private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(HomeSheetCompComponent);
  }

  ngOnInit(): void {

    this.service.user$.subscribe((res) => {
      if(res.isLoggedIn == true) {
        this.isEnabled = true;
      }
    });
  }

}


