import { Component, OnInit,Input,ElementRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
@Component({
  selector: 'app-tool-bar-comp',
  templateUrl: './tool-bar-comp.component.html',
  styleUrls: ['./tool-bar-comp.component.css']
})
export class ToolBarCompComponent implements OnInit {

  @Input()
  drawer:any;

  @Input()
  isDisabled:boolean = true;
  color: ThemePalette = 'primary';
  mode: ProgressBarMode = 'determinate';
  value = 100;
  bufferValue = 75;
 

  constructor() { }

  ngOnInit(): void {
  }

}
