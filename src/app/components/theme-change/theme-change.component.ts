import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-change',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-change.component.html',
  styleUrl: './theme-change.component.css'
})
export class ThemeChangeComponent {
  isDarkMode: boolean = true;
  toggleTheme(): void {
    if (this.isDarkMode) {
      document.getElementsByTagName('body')[0].classList.remove('dark');
    } else {
      document.getElementsByTagName('body')[0].classList.add('dark');
    }
    this.isDarkMode = !this.isDarkMode;
  }
}
