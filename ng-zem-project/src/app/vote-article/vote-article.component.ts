import { Component, OnInit } from '@angular/core';
import votesdata  from  '../../data/vote-elements.json'

export interface voteElement {
  likes: number;
  dislikes: number;
  date: Date;
  category: String;
  name: String;
  description: String;
  img: String;
}

@Component({
  selector: 'app-vote-article',
  templateUrl: './vote-article.component.html',
  styleUrls: ['./vote-article.component.scss']
})
export class VoteArticleComponent implements OnInit {

  private voteCheck: boolean;
  private votesData: voteElement[];

  constructor() {
    this.votesData = votesdata;
    this.voteCheck = false;
  }

  ngOnInit() { }

  private percentVote(votesNumber: number, totalVotes: number): number {
    const result: number = (votesNumber/totalVotes) * 100;
    return result;
  }
 
  private toggleVote(): void {
    this.voteCheck = !this.voteCheck;
  }
}
