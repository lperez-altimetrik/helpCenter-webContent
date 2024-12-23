import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDragScroll]',
  standalone: true
})
export class DragScrollDirective {
  private isDragging = false;
  private startX: number = 0;
  private scrollLeft: number = 0;

  constructor(private el: ElementRef) { }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.pageX - this.el.nativeElement.firstChild.offsetLeft;
    this.scrollLeft = this.el.nativeElement.firstChild.scrollLeft;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if(!this.isDragging) return;
    const x = event.pageX - this.el.nativeElement.firstChild.offsetLeft;
    const walk = (x - this.startX) * 1.25; //scroll speed
    this.el.nativeElement.firstChild.scrollLeft = this.scrollLeft - walk;
  } 

  @HostListener('mouseup')
  @HostListener('mouseleave')
  onMouseUp() {
    this.isDragging = false;
  }
}
