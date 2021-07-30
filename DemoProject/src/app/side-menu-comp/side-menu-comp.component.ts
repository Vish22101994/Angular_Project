import { Component, OnInit ,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { UserStateService } from '../user-state.service';


@Component({
  selector: 'app-side-menu-comp',
  templateUrl: './side-menu-comp.component.html',
  styleUrls: ['./side-menu-comp.component.css']
})
export class SideMenuCompComponent implements OnInit , AfterViewInit {
  isSelected:boolean = false;
  @ViewChild('listSelect') listSelect : MatSelectionList;
  menuList:String[] = ["Home", "Feature-01","Feature-02", "Feature-03","Feature-04","Feature-05","Contact Us"];
  menuIconList:String[] = ["home", "extension","extension", "extension","extension","extension","mail"];
  constructor(private  router:Router,private ref:ElementRef, private service:UserStateService) { 
    
  }

  ngOnInit(): void {
    console.log(this.ref.nativeElement.querySelector('#lS'));
  }


    navigate(listItem:String) {
      
        let url:string = listItem.replace("-","_").toLowerCase();
        this.router.navigateByUrl("/"+url);
    }


    ngAfterViewInit() {
        this.service.user$.subscribe(res => {
          if(res.isLoggedIn == true) {
            this.listSelect.options.first.selected = true;
          }
        });
    }
    

}

