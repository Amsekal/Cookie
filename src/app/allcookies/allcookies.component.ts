import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {StepService} from '../step.service';
@Component({
  selector: 'app-allcookies',
  templateUrl: './allcookies.component.html',
  styleUrls: ['./allcookies.component.scss']
})
export class AllcookiesComponent implements OnInit {

  constructor(private stepService: StepService){}

  ngOnInit(): void {
  }

  Accept(){
    this.stepService.nextStep();
    
  }
}
