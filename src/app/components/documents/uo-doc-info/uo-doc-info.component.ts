import { Component, OnInit } from '@angular/core';
import { DmsService } from '../../../service/dms.service';

@Component({
  selector: 'app-uo-doc-info',
  templateUrl: './uo-doc-info.component.html',
  styleUrls: ['./uo-doc-info.component.css']
})
export class UoDocInfoComponent implements OnInit {

  documentId: string;
  documentSchema: any;

  constructor(private dmsService: DmsService) { }

  ngOnInit() {
  }

  findDocById() {
    // This link needs to be created by DocumentService business logic.
    return 'http://localhost:9090/api/v1/files/c99b8940-073d-45f7-88fc-3147365d597800-50-56-C0-00-08/view';
  }
}
