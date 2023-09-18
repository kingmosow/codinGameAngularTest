import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2} from '@angular/core';

@Component({
  selector: 'voter-component',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})

export class VoterComponent {
  @Input()
  public question: string|undefined;

  @Input()
  public yesAnswer: string|undefined;

  @Input()
  public noAnswer: string|undefined;

  @Output()
  public output = new EventEmitter<boolean>();

  public vote(vote: boolean): void{
    this.output.emit(vote);
  }
}
