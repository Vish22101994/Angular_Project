import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-comp',
  templateUrl: './side-menu-comp.component.html',
  styleUrls: ['./side-menu-comp.component.css']
})
export class SideMenuCompComponent implements OnInit {
  menuList:String[] = ["Home", "Feature-01","Feature-02", "Feature-03","Feature-04","Feature-05","Contact Us"];
  menuIconList:String[] = ["home", "extension","extension", "extension","extension","extension","mail"];
  constructor() { }

  ngOnInit(): void {
  }

}