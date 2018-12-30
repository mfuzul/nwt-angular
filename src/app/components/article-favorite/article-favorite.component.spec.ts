import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleFavoriteComponent } from './article-favorite.component';

describe('ArticleFavoriteComponent', () => {
  let component: ArticleFavoriteComponent;
  let fixture: ComponentFixture<ArticleFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
