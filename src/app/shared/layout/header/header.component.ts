import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeChangeComponent } from '../../../components/theme-change/theme-change.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,ThemeChangeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 public sidenav: boolean = false;
  public Menu: IMenu[] = [
    { id: 1, name: 'Home', url: 'home' },
    { id: 2, name: 'Skills', url: 'skills' },
    { id: 3, name: 'Project', url: 'project' },
    { id: 4, name: 'Experience', url: 'experience' },
    { id: 5, name: 'Contact', url: 'contact' }
  ];

  toggleMenu() {
    this.sidenav = !this.sidenav;
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
interface IMenu{
  id: number,
  name: string,
  url: string,
}
