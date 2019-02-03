import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { DmsService } from '../../../service/dms.service';
import { NgForm } from '@angular/forms';
import { NotesDto } from '../../../data/dto/notes-dto';
import { ProjectService } from '../../../service/project.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-uo-doc-notes-modal',
  templateUrl: './uo-doc-notes-modal.component.html',
  styles: []
})
export class UoDocNotesModalComponent implements OnInit {

  projectCommentsList: {projectId: number, notesInfo: NotesDto}[] = [];

  constructor(public dialogRef: MatDialogRef<UoDocNotesModalComponent>,
              private projectService: ProjectService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const projectSelected = this.projectService.getSelectedProjectId();
    const loggedUser = this.authService.getUser();
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
