import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    this.validatePassword(),
  ]);

  validatePassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      if (!value) return null;
      const hasUpperCase = /[A-Z]/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasNumeric = /[0-9]/.test(value);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecial;

      return !passwordValid ? { passwordStrength: true } : null;
    };
  }

  submitForm() {
    this.email.markAsTouched();
    this.password.markAsTouched();

    if (this.email.invalid || this.password.invalid) {
      alert('failed!');
      return;
    }

    alert('hi');
    // call to auth
  }
}
