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
  public sidenav:boolean = false;
  public Menu: IMenu[] = [
    { id: 1, name: "Home", url: '' },
    { id: 2, name: "Project", url: 'project' },
    { id: 3, name: "Skills", url: '#skills' },
    { id: 4, name: "Expricence", url: '#expricence' },
    { id: 5, name: "contact", url: '#contact' }
  ];
  toggleMenu() {
      this.sidenav = !this.sidenav;
    }
  }
interface IMenu{
  id: number,
  name: string,
  url: string|null,
}
