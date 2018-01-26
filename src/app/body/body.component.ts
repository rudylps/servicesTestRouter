import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public appService: AppService) { }

  selectedMenu = 'contact';

  ngOnInit() {}

  public selectMenu(menu): void {
    this.appService.selectedMenu = menu;
  }

}
