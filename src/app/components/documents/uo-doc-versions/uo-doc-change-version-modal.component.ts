import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uo-doc-change-version-modal',
  template: `<h1 mat-dialog-title>Are you sure that you want to choose this version of your document?</h1>
              <mat-dialog-content>
                <p>The default version shown in your profile will be the selected one.</p>
              </mat-dialog-content>
              <mat-dialog-actions>
                  <button mat-button [mat-dialog-close]="true">Yes</button>
                  <button mat-button [mat-dialog-close]="false">No</button>
              </mat-dialog-actions>`
})
export class UoDocChangeVersionModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
