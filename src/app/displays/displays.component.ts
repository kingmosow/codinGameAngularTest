import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-displays',
  templateUrl: './displays.component.html',
  styleUrls: ['./displays.component.css']
})
export class DisplaysComponent implements OnInit {

  public question = "Too easy?"
  public yesAnswer = "Yes";
  public noAnswer = "No";
  public ternaire: string|undefined;

  constructor() { }

  ngOnInit(): void {

  }
  awesomeMethod($event: any) {
    this.ternaire  = $event == true ? this.yesAnswer  : this.noAnswer;
  }

}
