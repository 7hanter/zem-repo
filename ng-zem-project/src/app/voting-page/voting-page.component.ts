import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voting-page',
  templateUrl: './voting-page.component.html',
  styleUrls: ['./voting-page.component.scss']
})

export class VotingPageComponent implements OnInit{
  private closeTab: Boolean;

  constructor() {
    this.closeTab = true;
  }

  ngOnInit() { }
  
  private toggleClose(): void {
    this.closeTab = !this.closeTab;
  }

}
