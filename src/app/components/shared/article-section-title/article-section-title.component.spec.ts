import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionTitleComponent } from './article-section-title.component';

describe('ArticleSectionTitleComponent', () => {
  let component: ArticleSectionTitleComponent;
  let fixture: ComponentFixture<ArticleSectionTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleSectionTitleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleSectionTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
