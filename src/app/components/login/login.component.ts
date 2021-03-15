import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { setStorage } from '../../utils/localStorage';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    trainerName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(20),
    ]),
  });

  constructor(
    private router: Router,
    private readonly sessionService: SessionService
  ) {}

  get trainerName(): AbstractControl | null {
    return this.loginForm.get('trainerName');
  }

  onLoginClick() {
    this.sessionService.login(this.trainerName?.value);
    // setStorage('trainerName', this.trainerName?.value);
    // setStorage('collectedPokemon', []);
    this.router.navigate(['pokemon']);
  }
}
