import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {}

  get active(): boolean {
    return this.sessionService.active();
  }

  logout(): void {
    this.sessionService.logout();
    this.router.navigate(['login']);
  }
}
