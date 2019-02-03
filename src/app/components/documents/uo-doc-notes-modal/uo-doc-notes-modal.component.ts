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

  constructor(public dialogRef: MatDialogRef<UoDocNotesModalComponent>,
              private authService: AuthService,
              private commonService: CommonService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const loggedUser = this.authService.getUser();
    const notesInfoDto: NotesDto = {
      title: form.value.title,
      author: `${loggedUser.name} ${loggedUser.lastName}`,
      description: form.value.description
    };

    this.commonService.saveProjectComment(notesInfoDto);
    this.dialogRef.close();
  }

  onCancel() {
    this.dialogRef.close();
  }
}
