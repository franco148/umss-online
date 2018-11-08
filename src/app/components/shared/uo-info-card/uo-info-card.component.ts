import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../../data/model/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uo-info-card',
  templateUrl: './uo-info-card.component.html',
  styleUrls: ['./uo-info-card.component.css']
})
export class UoInfoCardComponent implements OnInit {

  @Input() isChangesInformation: boolean;
  @Input() projectCardInfo: Project;

  @Input() backgroundImage: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onProjectSelect() {
    this.router.navigate(['/project', this.projectCardInfo.id]);
  }

  onSelectVersion(event: Event) {
    console.log(event);
  }
}
