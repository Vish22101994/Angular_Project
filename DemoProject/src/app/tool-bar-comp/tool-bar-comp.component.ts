import { Component, OnInit,Input,ElementRef } from '@angular/core';

@Component({
  selector: 'app-tool-bar-comp',
  templateUrl: './tool-bar-comp.component.html',
  styleUrls: ['./tool-bar-comp.component.css']
})
export class ToolBarCompComponent implements OnInit {

  @Input()
  drawer:any;
  constructor() { }

  ngOnInit(): void {
  }

}
