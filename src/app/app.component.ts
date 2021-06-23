import { Component } from '@angular/core';
import { Observable, Subject,Subscription } from 'rxjs';
import {StepService} from './step.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cookie';


  subscription: Subscription;
  Show = 0;
  constructor(private stepService: StepService) { 
    this.subscription = this.stepService.onChange().subscribe(
      value => this.Show = value
    );
  }
}
