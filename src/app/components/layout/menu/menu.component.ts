import { Component } from '@angular/core';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MdbCollapseModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private router: Router) {}

  logout() {
    // simple client-side logout: navigate to login
    this.router.navigate(['/login']);
  }
}