import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uo-progress-item',
  templateUrl: './uo-progress-item.component.html',
  styleUrls: ['./uo-progress-item.component.css']
})
export class UoProgressItemComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('percentage') progressPercentage: number;

  // tslint:disable-next-line:no-input-rename
  @Input('status') progressStatus: string;

  // tslint:disable-next-line:no-input-rename
  @Input('amount') numberOfTasks: number;

  // tslint:disable-next-line:no-input-rename
  @Input('color') percentageColor: string;

  constructor() { }

  ngOnInit() {
    this.progressPercentage = 41;
    this.progressStatus = 'To Do';
    this.numberOfTasks = 82;
    this.percentageColor = '#134F5C';
  }

}
