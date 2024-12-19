import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpCenterArticleComponent } from './help-center-article.component';

describe('HelpCenterArticleComponent', () => {
  let component: HelpCenterArticleComponent;
  let fixture: ComponentFixture<HelpCenterArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpCenterArticleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpCenterArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
