import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillBarComponent } from './pill-bar.component';

describe('PillBarComponent', () => {
  let component: PillBarComponent;
  let fixture: ComponentFixture<PillBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PillBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PillBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
