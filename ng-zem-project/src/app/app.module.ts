import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DayCounterComponent } from './day-counter/day-counter.component';
import { VotingPageComponent } from './voting-page/voting-page.component';
import { VoteArticleComponent } from './vote-article/vote-article.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavBarComponent,
    DayCounterComponent,
    VotingPageComponent,
    VoteArticleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
