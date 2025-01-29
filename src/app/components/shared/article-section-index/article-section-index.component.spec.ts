import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionIndexComponent } from './article-section-index.component';

describe('ArticleSectionTitleComponent', () => {
  let component: ArticleSectionIndexComponent;
  let fixture: ComponentFixture<ArticleSectionIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleSectionIndexComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ArticleSectionIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
