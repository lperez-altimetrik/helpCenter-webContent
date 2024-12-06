import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualMessageComponent } from './contextual-message.component';

describe('ContextualMessageComponent', () => {
  let component: ContextualMessageComponent;
  let fixture: ComponentFixture<ContextualMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContextualMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
