import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DmsService } from '../../../service/dms.service';

@Component({
  selector: 'app-uo-doc-info',
  templateUrl: './uo-doc-info.component.html',
  styleUrls: ['./uo-doc-info.component.css']
})
export class UoDocInfoComponent implements OnInit {

  documentId: string;
  documentSchema: any;
  documentFileLink: string;

  constructor(private activatedRoute: ActivatedRoute, private dmsService: DmsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.dmsService.findByQuery(params['id']).subscribe(docSchema => {
          this.documentSchema = docSchema[0];
          // this.documentId = this.documentSchema.id;
          this.documentId = `http://localhost:9090/api/v1/files/${this.documentSchema.id}/view`;
          console.log('Document Schema: ', this.documentSchema, '  plus document Id: ', this.documentId);
        });
      }
    });
  }

  findDocById() {
    // This link needs to be created by DocumentService business logic.
    // here call dmsService for building the proper url to the document resource.
    return 'http://localhost:9090/api/v1/files/c99b8940-073d-45f7-88fc-3147365d597800-50-56-C0-00-08/view';
  }
}
