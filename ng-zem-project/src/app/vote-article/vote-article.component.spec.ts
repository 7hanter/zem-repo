import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteArticleComponent } from './vote-article.component';

describe('VoteArticleComponent', () => {
  let component: VoteArticleComponent;
  let fixture: ComponentFixture<VoteArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
