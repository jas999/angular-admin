import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  clicked: string = null;

    sideNavClick(clicked: string): void {
        this.clicked = this.clicked == clicked ? null : clicked;
    }
  constructor() { }

  ngOnInit() {
  }

}
