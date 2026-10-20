import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-from.html',
  styleUrls: ['./user-from.css'],
})
export class UserFrom {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(8),
    ]),
  });

  submitMessage = '';

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      this.submitMessage = '';
      return;
    }

    this.submitMessage =
      'Formulaire validé. Pour enregistrer les données définitivement, il faut connecter un backend.';
  }
}