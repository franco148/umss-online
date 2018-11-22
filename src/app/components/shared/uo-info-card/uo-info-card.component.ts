import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../../data/model/project.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UoDocChangeVersionModalComponent } from '../../documents/uo-doc-versions/uo-doc-change-version-modal.component';

@Component({
  selector: 'app-uo-info-card',
  templateUrl: './uo-info-card.component.html',
  styleUrls: ['./uo-info-card.component.css']
})
export class UoInfoCardComponent implements OnInit {

  @Input() isChangesInformation: boolean;
  @Input() projectCardInfo: Project;

  @Input() backgroundImage: string;

  // @Input() versionIndex: number;
  // @Output() versionOnSelect = new EventEmitter<void>();

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
  }

  onProjectSelect() {
    this.router.navigate(['/project', this.projectCardInfo.id]);
  }

  onSelectVersion(event: Event) {
    console.log(this.projectCardInfo);
    // this.versionOnSelect.emit();
    if (!this.projectCardInfo.isRoot) {
      // console.log('Do you want to change de version of the document?');
      const dialogRef = this.dialog.open(UoDocChangeVersionModalComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          console.log('Confirmed the change of version....');
          this.projectCardInfo.isRoot = false;

          console.log(this.projectCardInfo.isRoot);
        }
      });
    } else {
      this.projectCardInfo.isRoot = true;
    }
  }
}
