import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {StepService} from '../step.service';
import {ChangeDetectionStrategy} from '@angular/core';
@Component({
  selector: 'app-allcookies',
  templateUrl: './allcookies.component.html',
  styleUrls: ['./allcookies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllcookiesComponent implements OnInit {

  constructor(private stepService: StepService){}

  ngOnInit(): void {
  }

  Accept(){
    this.stepService.nextStep();
    
  }
  items = Array.from({length: 3}).map((_, i) => `Item #${i}`);
  cookies=[{suti:'Et harum quidem rerum facilis est et expedita distinctio', szin:'white'},
           {suti:'Et harum quidem rerum facilis est et expedita distinctio', szin:'#B1DDC4'},
           {suti:'Et harum quidem rerum facilis est et expedita distinctio', szin:'white'},
           {suti:'Et harum quidem rerum facilis est et expedita distinctio', szin:'#B1DDC4'},
           {suti:'Et harum quidem rerum facilis est et expedita distinctio', szin:'white'},
           {suti:'Et harum quidem rerum facilis est et expedita distinctio', szin:'#B1DDC4'},
           {suti:'Et harum quidem rerum facilis est et expedita distinctio', szin:'white'},
           {suti:'Et harum quidem rerum facilis est et expedita distinctio', szin:'#B1DDC4'},
           {suti:'Et harum quidem rerum facilis est et expedita distinctio', szin:'white'},
           {suti:'Et harum quidem rerum facilis est et expedita distinctio', szin:'#B1DDC4'}];
}
