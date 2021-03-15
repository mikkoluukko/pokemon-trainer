import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { setStorage } from '../../utils/localStorage';

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

  constructor(private router: Router) {}

  get trainerName(): AbstractControl | null {
    return this.loginForm.get('trainerName');
  }

  onLoginClick() {
    setStorage('trainerName', this.trainerName?.value);
    setStorage('collectedPokemon', []);
    this.router.navigate(['pokemon']);
  }
}
