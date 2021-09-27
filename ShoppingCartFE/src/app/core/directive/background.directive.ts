import { Directive, ElementRef, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit{

  @Input() color:string='red';
  constructor(private el: ElementRef) { }
  ngOnInit(): void {
    this.el.nativeElement.style.backgroundColor='#fff';
  }
  
  //se executa intai constr apoi onInit si cand inchidem, onDestroy
  @HostListener('mouseover')
  onMouseOver() {
    this.el.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.el.nativeElement.style.backgroundColor  =  '#fff';
  }
  

}
