import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-home-sheet-comp',
  templateUrl: './home-sheet-comp.component.html',
  styleUrls: ['./home-sheet-comp.component.css']
})
export class HomeSheetCompComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<HomeSheetCompComponent>) { }

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
