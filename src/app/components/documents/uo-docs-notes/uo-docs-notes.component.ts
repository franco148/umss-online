import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uo-docs-notes',
  templateUrl: './uo-docs-notes.component.html',
  styleUrls: ['./uo-docs-notes.component.css']
})
export class UoDocsNotesComponent implements OnInit {

  isChangesInformation = true;
  cardDescription = `The Shiba Inu is the smallest of the six original and
   distinct spitz breeds of dog from Japan. A small, agile dog that copes
   very well with mountainous terrain, the Shiba Inu was originally bred
   for hunting.`;

  constructor() { }

  ngOnInit() {
  }

}
