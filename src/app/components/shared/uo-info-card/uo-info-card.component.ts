import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uo-info-card',
  templateUrl: './uo-info-card.component.html',
  styleUrls: ['./uo-info-card.component.css']
})
export class UoInfoCardComponent implements OnInit {

  isChangesInformation = true;
  @Input() backgroundImage: string;
  cardDescription = `The Shiba Inu is the smallest of the six original and
   distinct spitz breeds of dog from Japan. A small, agile dog that copes
   very well with mountainous terrain, the Shiba Inu was originally bred
   for hunting.`;

  constructor() { }

  ngOnInit() {
  }

}
