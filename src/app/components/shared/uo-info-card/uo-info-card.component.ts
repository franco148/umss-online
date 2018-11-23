import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../../data/model/project.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { UoDocChangeVersionModalComponent } from '../../documents/uo-doc-versions/uo-doc-change-version-modal.component';
import { DmsService } from '../../../service/dms.service';

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
  @Output() versionOnSelect = new EventEmitter<void>();

  constructor(private router: Router, private dialog: MatDialog, private dmsService: DmsService) { }

  ngOnInit() {
  }

  onProjectSelect() {
    this.router.navigate(['/project', this.projectCardInfo.id]);
  }

  onSelectVersion(event: Event) {
    console.log(this.projectCardInfo);
    if (!this.projectCardInfo.isRoot) {
      const dialogRef = this.dialog.open(UoDocChangeVersionModalComponent);

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.dmsService.changeDocumentVersion(this.projectCardInfo.documentId, this.projectCardInfo.versionId).subscribe(changed => {
            console.log(changed);
            this.versionOnSelect.emit();
          });
        } else {
          this.versionOnSelect.emit();
        }
      });
    }
  }
}
