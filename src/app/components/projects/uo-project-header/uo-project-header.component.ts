import { Component, OnInit, Input, AfterViewInit, DoCheck } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-uo-project-header',
  templateUrl: './uo-project-header.component.html',
  styleUrls: ['./uo-project-header.component.css']
})
export class UoProjectHeaderComponent implements OnInit, AfterViewInit, DoCheck {

  @Input() projectName: string;
  @Input() projectVersion: string;
  @Input() projectStartedOn: Date;
  @Input() projectCompletionEstimate: Date;

  daysLeftForCompletion: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngDoCheck() {
    if (this.projectCompletionEstimate) {
      const today = new Date();

      const completionMoment = moment(this.projectCompletionEstimate.toString());
      const todayMoment = moment(today.getTime());
      this.daysLeftForCompletion = completionMoment.diff(todayMoment, 'days');
    }
  }
}
