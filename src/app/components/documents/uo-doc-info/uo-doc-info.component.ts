import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material';

import { DmsService } from '../../../service/dms.service';
import { UoDocNotesModalComponent } from '../uo-doc-notes-modal/uo-doc-notes-modal.component';
import { NotesDto } from '../../../data/dto/notes-dto';
import { Subscription } from 'rxjs';
import { CommonService } from '../../../service/common.service';

@Component({
  selector: 'app-uo-doc-info',
  templateUrl: './uo-doc-info.component.html',
  styleUrls: ['./uo-doc-info.component.css']
})
export class UoDocInfoComponent implements OnInit, OnDestroy {

  projectId: number;

  documentId: string;
  documentSchema: any;
  documentFileLink: string;

  progress: { percentage: number } = { percentage: 90 };

  selectedFiles: FileList;
  currentFileUpload: File;

  projectCommentsList: NotesDto[] = [];
  projectCommentSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private dmsService: DmsService,
              private commonService: CommonService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.projectId = params['id'];
        this.dmsService.selectedProjecId = this.projectId;
        this.buildSchemaAndBuildDocumentUri();
      }
    });

    this.projectCommentsList = this.commonService.getCommentsFromSelectedProject();

    this.projectCommentSubscription = this.commonService.projectNotesChanged.subscribe(comment => {
      this.projectCommentsList.push(comment);
    });
  }

  findDocById() {
    // This link needs to be created by DocumentService business logic.
    // here call dmsService for building the proper url to the document resource.
    return 'http://localhost:9090/api/v1/files/c99b8940-073d-45f7-88fc-3147365d597800-50-56-C0-00-08/view';
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.dmsService.attachDocument(this.currentFileUpload, this.projectId).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.buildSchemaAndBuildDocumentUri();
      }
    });

    this.selectedFiles = undefined;
  }

  private buildSchemaAndBuildDocumentUri() {
    this.dmsService.findByQuery(this.projectId).subscribe(docSchema => {
      if (docSchema[0]) {
        this.documentSchema = docSchema[0];
        this.dmsService.selectedProjectDocumentId = this.documentSchema.id;
        this.documentId = `http://localhost:9090/api/v1/files/${this.documentSchema.id}/view`;
      }
    });
  }

  addNewNote() {
    const dialogRef = this.dialog.open(UoDocNotesModalComponent, {
      width: '370px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnDestroy() {
    if (this.projectCommentSubscription) {
      this.projectCommentSubscription.unsubscribe();
    }
  }
}
