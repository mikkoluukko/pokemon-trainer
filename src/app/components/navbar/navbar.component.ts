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
    public readonly router: Router
  ) {}

  public get active(): boolean {
    return this.sessionService.active();
  }

  public logout(): void {
    this.sessionService.logout();
    this.router.navigate(['login']);
  }
}
