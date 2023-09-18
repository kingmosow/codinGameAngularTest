import {Component, Input, OnDestroy, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit,OnDestroy {

  public inputValue: string = '';
  public thePeriod: any; //NodeJS.Timer;

  @Input() public message: string|undefined;
  @Output() public tick: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public setPeriod(intervalInput:string): void {
    clearInterval(this.thePeriod);
    this.thePeriod = setInterval(() => this.tick.emit(this.message), +intervalInput);
  }

  ngOnDestroy(): void {
    clearInterval(this.thePeriod);
  }
}
