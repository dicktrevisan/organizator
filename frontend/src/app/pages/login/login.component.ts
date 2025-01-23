import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

const PrimeModules = [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, RippleModule,FloatLabelModule]
@Component({
  selector: 'app-login',
  imports: [...PrimeModules,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';

  password: string = '';

  checked: boolean = false;
}
