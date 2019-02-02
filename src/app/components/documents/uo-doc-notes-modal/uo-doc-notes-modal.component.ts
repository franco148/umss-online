import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DmsService } from '../../../service/dms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-uo-doc-notes-modal',
  templateUrl: './uo-doc-notes-modal.component.html',
  styles: []
})
export class UoDocNotesModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UoDocNotesModalComponent>) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    // this.dmsService.uploadDocumentVersion(
    //   this.passedData.documentId,
    //   this.selectedFiles.item(0),
    //   form.value.title, form.value.description)
    // .subscribe(docVersion => {
    //   console.log(docVersion);
    //   this.dialogRef.close(docVersion);
    // });
  }

  onCancel() {
    this.dialogRef.close();
  }
}
