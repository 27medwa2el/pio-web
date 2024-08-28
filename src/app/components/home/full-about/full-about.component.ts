import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-full-about',
  templateUrl: './full-about.component.html',
  styleUrls: ['./full-about.component.scss']
})
export class FullAboutComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    this.renderer.setProperty(document.body, 'scrollTop', 0);
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
  }
}
