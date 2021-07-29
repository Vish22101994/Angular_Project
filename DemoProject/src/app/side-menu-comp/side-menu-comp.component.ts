import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu-comp',
  templateUrl: './side-menu-comp.component.html',
  styleUrls: ['./side-menu-comp.component.css']
})
export class SideMenuCompComponent implements OnInit {
  menuList:String[] = ["Home", "Feature-01","Feature-02", "Feature-03","Feature-04","Feature-05","Contact Us"];
  menuIconList:String[] = ["home", "extension","extension", "extension","extension","extension","mail"];
  constructor(private  router:Router) { }

  ngOnInit(): void {
  }


    navigate(listItem:String) {
      
        let url:string = listItem.replace("-","_").toLowerCase();
        this.router.navigateByUrl("/"+url);
    }

}

