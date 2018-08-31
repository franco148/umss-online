import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uo-project-header',
  templateUrl: './uo-project-header.component.html',
  styleUrls: ['./uo-project-header.component.css']
})
export class UoProjectHeaderComponent implements OnInit {

  @Input() projectName: string;
  @Input() projectVersion: string;
  @Input() projectStartedOn: Date;
  @Input() projectCompletionEstimate: Date;

  constructor() { }

  ngOnInit() {
  }

}
