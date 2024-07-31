import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  color: string = '#000';
  position: string = 'top';
  size: number = 14;
  trim = false;
  constructor() {}
  ngOnInit(): void {}
}
