import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-allcookies',
  templateUrl: './allcookies.component.html',
  styleUrls: ['./allcookies.component.scss']
})
export class AllcookiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}
