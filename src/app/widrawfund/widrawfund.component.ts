import { Component } from '@angular/core';

@Component({
  selector: 'app-widrawfund',
  templateUrl: './widrawfund.component.html',
  styleUrls: ['./widrawfund.component.css']
})
export class WidrawfundComponent {
  Total: any;
  twothousand: number=0
fivehundred: any=0
twohundred: number=0
  onehundred:number=0
  depositLogs: any;
  logDisplay: string='';
  balance: number=0;
  withdrawAmount: number=0;
  denominations: number[] = [2000, 500, 200, 100];
  denominationsCount: number[] = [0, 0, 0, 0];
Deposit(){
 
  this.Total = (this.twothousand*2000) + (this.fivehundred*500) + (this.twohundred*200) + (this.onehundred*100)
  const now = new Date();
  
  const depositLog = `${now.toString()} - Deposit ${2000}: ${this.twothousand}  ${500}: ${this.fivehundred}  ${500}: ${this.twohundred}  ${500}: ${this.onehundred}`;
  
  this.logDisplay = depositLog + '<br>' + this.logDisplay;
}
Withdraw(){
  const now = new Date();
  let withdrawalLog = `${now.toString()} - Withdrawal ${this.withdrawAmount} rs:`;

  const availableAmount = (this.twothousand * 2000) + (this.fivehundred * 500) + (this.twohundred * 200) + (this.onehundred * 100);

  if (this.withdrawAmount > availableAmount) {
    const insufficientTime = new Date();
    withdrawalLog = `Cannot Withdraw ${this.withdrawAmount} rs<br>${insufficientTime.toString()}`;
  } else {
    let remainingAmount = this.withdrawAmount;
    let notesRequired: string[] = [];

    if (remainingAmount >= 2000 && this.twothousand > 0) {
      const noteCount = Math.min(Math.floor(remainingAmount / 2000), this.twothousand);
      notesRequired.push(`${noteCount} notes of 2000`);
      remainingAmount -= noteCount * 2000;
      this.twothousand -= noteCount;
      this.Total=this.Total-(noteCount*2000)
    }

    if (remainingAmount >= 500 && this.fivehundred > 0) {
      const noteCount = Math.min(Math.floor(remainingAmount / 500), this.fivehundred);
      notesRequired.push(`${noteCount} notes of 500`);
      remainingAmount -= noteCount * 500;
      this.fivehundred -= noteCount;
      this.Total=this.Total-(noteCount*500)

    }

    if (remainingAmount >= 200 && this.twohundred > 0) {
      const noteCount = Math.min(Math.floor(remainingAmount / 200), this.twohundred);
      notesRequired.push(`${noteCount} notes of 200`);
      remainingAmount -= noteCount * 200;
      this.twohundred -= noteCount;
      this.Total=this.Total-(noteCount*200)

    }

    if (remainingAmount >= 100 && this.onehundred > 0) {
      const noteCount = Math.min(Math.floor(remainingAmount / 100), this.onehundred);
      notesRequired.push(`${noteCount} notes of 100`);
      remainingAmount -= noteCount * 100;
      this.onehundred -= noteCount;
      this.Total=this.Total-(noteCount*100)

    }

    if (remainingAmount === 0) {
      withdrawalLog += ` Successful - ${notesRequired.join(', ')}`;
    } else {
      withdrawalLog += ` Error - Cannot Withdraw ${this.withdrawAmount} rs with available notes`;
    }
  }

  this.logDisplay = withdrawalLog + '<br>' + this.logDisplay;

}
}