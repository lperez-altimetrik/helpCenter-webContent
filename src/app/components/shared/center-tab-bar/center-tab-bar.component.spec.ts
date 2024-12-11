import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterTabBarComponent } from './center-tab-bar.component';

describe('CenterTabBarComponent', () => {
  let component: CenterTabBarComponent;
  let fixture: ComponentFixture<CenterTabBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterTabBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CenterTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
