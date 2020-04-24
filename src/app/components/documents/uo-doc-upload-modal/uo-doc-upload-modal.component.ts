import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DmsService } from '../../../service/dms.service';

@Component({
  selector: 'app-uo-doc-upload-modal',
  templateUrl: './uo-doc-upload-modal.component.html',
  styleUrls: ['./uo-doc-upload-modal.component.css']
})
export class UoDocUploadModalComponent implements OnInit {

  selectedFiles: FileList;

  constructor(public dialogRef: MatDialogRef<UoDocUploadModalComponent>,
              @Inject(MAT_DIALOG_DATA) public passedData: any,
              private dmsService: DmsService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  onSubmit(form: NgForm) {

    this.dmsService.uploadDocumentVersion(
      this.passedData.documentId,
      this.selectedFiles.item(0),
      form.value.title, form.value.description)
    .subscribe(docVersion => {
      console.log('----------------', docVersion);
      this.dialogRef.close(docVersion);
    });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
