import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-counter',
  templateUrl: './display-counter.component.html',
  styleUrls: ['./display-counter.component.css']
})
export class DisplayCounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public counter: number = 0;
  public message: string = 'hello world';

  public counterTick(message: string): void {
    this.message = message;
    this.counter++;
  }

}
