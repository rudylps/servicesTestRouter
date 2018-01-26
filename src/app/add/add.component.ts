import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public linkService: LinkService) { }

  ajouter(saisie) {
    this.linkService.liste.push(saisie);
  }

  ngOnInit() {}

}
