import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  color: string = '';
  position: string = '';
  size: number = 0;
  trim = false;
  constructor() {}
  ngOnInit(): void {}
}
