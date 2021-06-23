import { Component, OnInit } from '@angular/core';
import {StepService} from '../step.service';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {

  constructor(private stepService: StepService){}

  ngOnInit(): void {
  }

  Accept(){
    this.stepService.nextStep();
    this.stepService.nextStep();
  }

  View(){ this.stepService.nextStep();}
}
