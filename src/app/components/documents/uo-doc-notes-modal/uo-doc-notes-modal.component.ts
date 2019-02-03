import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { NgForm } from '@angular/forms';
import { NotesDto } from '../../../data/dto/notes-dto';
import { ProjectService } from '../../../service/project.service';
import { AuthService } from '../../auth/auth.service';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-uo-doc-notes-modal',
  templateUrl: './uo-doc-notes-modal.component.html',
  styles: []
})
export class UoDocNotesModalComponent implements OnInit {

  // projectCommentsList: {projectId: number, notesInfo: NotesDto[]}[] = [];

  constructor(public dialogRef: MatDialogRef<UoDocNotesModalComponent>,
              private authService: AuthService,
              private commonService: CommonService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    // const projectSelectedId = this.projectService.getSelectedProjectId();
    const loggedUser = this.authService.getUser();
    const notesInfoDto: NotesDto = {
      title: form.value.title,
      author: `${loggedUser.name} ${loggedUser.lastName}`,
      description: form.value.description
    };

    this.commonService.saveProjectComment(notesInfoDto);
    this.dialogRef.close();

    // const selectedProject = this.projectCommentsList.find(p => p.projectId === projectSelectedId);
    // if (selectedProject) {
    //   selectedProject.notesInfo.push(notesInfoDto);
    // } else {
    //   const projectNotes: NotesDto[] = [];
    //   projectNotes.push(notesInfoDto);
    //   this.projectCommentsList.push({
    //     projectId: projectSelectedId,
    //     notesInfo: projectNotes
    //   });
    // }

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
