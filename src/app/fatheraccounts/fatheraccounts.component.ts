import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {formatNumber} from "@angular/common";

@Component({
  selector: 'app-fatheraccounts',
  templateUrl: './fatheraccounts.component.html',
  styleUrls: ['./fatheraccounts.component.css']
})
export class FatheraccountsComponent implements OnInit {
  @Input() username !:string;
  @Input() password !:string;
  @Output() myOutputValue = new EventEmitter();

  currency !:string;
  amount !:number
  public amounts :number=312.56;
  fee !:number
  timeoftrans !:Date
  curr !:string
  message: string | undefined;

  constructor(private router:Router,) { }

  ngOnInit(): void {
    this.fee=0.031234
    this.currency="EUR"
    this.amount=312.56
    this.timeoftrans=new Date()
    this.curr=formatNumber(this.amount,'en-US',
      '9.1-3')
    // let t=formatNumber(this.amount,'en-US',
    //   '9.1-3')
    // this.curr = parseInt(t);
  }


}
