import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  formData!: FormGroup;
  hide = true;
  subscription: Subscription[] = [];
  constructor(
    private _fb: FormBuilder,
    private _service: AuthService,
    private router: Router
  ) {
    this.formData = this._fb.group({
      username: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(3),
      ]),
      password: new FormControl(undefined, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  onSubmit() {
    const formData = this.formData.value;
    if (this.formData.valid) {
      this.subscription.push(
        this._service.loginService(formData).subscribe((data) => {
          if (data) {
            this._service.storageAuthenticationData(data);
            this.router.navigateByUrl('');
          }
        })
      );
    }
  }
}
