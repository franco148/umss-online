import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uo-docs-toolbar',
  templateUrl: './uo-docs-toolbar.component.html',
  styleUrls: ['./uo-docs-toolbar.component.css']
})
export class UoDocsToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickMethod() {
    console.log('menu buttons clicks!!!...');
  }
}
