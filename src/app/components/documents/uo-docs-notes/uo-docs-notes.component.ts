import { Component, OnInit, Input } from '@angular/core';
import { NotesDto } from '../../../data/dto/notes-dto';

@Component({
  selector: 'app-uo-docs-notes',
  templateUrl: './uo-docs-notes.component.html',
  styleUrls: ['./uo-docs-notes.component.css']
})
export class UoDocsNotesComponent implements OnInit {

  isChangesInformation = true;
  @Input() projectComment: NotesDto;

  constructor() { }

  ngOnInit() {
  }

}
