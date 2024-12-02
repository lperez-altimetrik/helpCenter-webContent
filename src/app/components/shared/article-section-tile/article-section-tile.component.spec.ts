import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionTileComponent } from './article-section-tile.component';

describe('ArticleSectionTileComponent', () => {
  let component: ArticleSectionTileComponent;
  let fixture: ComponentFixture<ArticleSectionTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleSectionTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleSectionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
