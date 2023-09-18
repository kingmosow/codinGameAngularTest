import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2} from '@angular/core';
import {formatNumber} from "@angular/common";
import {AccountsService} from "../services/accounts.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  @Input() username !:string;
  @Input() password !:string;
  @Output() myOutputValue = new EventEmitter();

  currency !:string;
  amount !:number
  public amounts :number=312.56;

  public tet !:number
  fee !:number
  timeoftrans !:Date
  curr !:string
  accountid : string | undefined
  message: string | undefined;
  topupAccount : string| undefined;
  topupAmount: number | undefined;

  constructor(private accountsService:AccountsService,private element:ElementRef,
              private renderer:Renderer2) { }

  ngOnInit(): void {

  }

  create(value: string) {
    if (value != null && value != '') {
      this.accountsService
        .createAccount(value)
        .then((res) => {
          console.log(res)
          this.message = 'Successfully added account';
        })
        .catch((err) => {
          this.message = err;
        });
    }
    console.log(value);
    //this.renderer.setStyle(this.element.nativeElement,'color','red');
  }

  topup(accountID: string,amount: string) {
    // let accountID = this.topupAccount;
    // let amount: number | undefined = this.topupAmount;
    let amounts:number =+amount;

    if (accountID != null && accountID != '' && amount!=null && amounts > 0) {
      this.accountsService
        .topUp(accountID, amounts)
        .then((res) => {
          this.message = 'Current balance: ' + res;
        })
        .catch((err) => {
          this.message = err;
        });
    }else this.message='INVALID_INPUT'
  }

}
