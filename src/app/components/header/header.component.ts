import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentTheme: 'theme-light' | 'theme-dark' = 'theme-light';

  constructor(private renderer: Renderer2) {}

  toggleTheme() {
    if (this.currentTheme === 'theme-light') {
      this.currentTheme = 'theme-dark';
      this.renderer.removeClass(document.body, 'theme-light');
      this.renderer.addClass(document.body, 'theme-dark');
    } else {
      this.currentTheme = 'theme-light';
      this.renderer.removeClass(document.body, 'theme-dark');
      this.renderer.addClass(document.body, 'theme-light');
    }
  }
}
