import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { LinkService } from './app/link.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public linkService: LinkService) { }

  supprimerDeLaListe(trucAFaire) {
    this.linkService.liste.splice(this.linkService.liste.indexOf(trucAFaire), 1);
  }

  ngOnInit() {
  }

}
