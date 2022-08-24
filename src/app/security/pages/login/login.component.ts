import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  status: boolean;
  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) {
    this.status = false;
  }

  ngOnInit(): void {
  }

  frmLogin: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });

  fieldValidator(fiel: string) {
    return this.frmLogin.controls?.[fiel].errors && this.frmLogin.controls?.[fiel].touched
  }

  Login() {
    const login = this.frmLogin.getRawValue();
    if (this.frmLogin.invalid) {
      return;
    }
    this.authService.SignIn(login.email, login.password).then(() => {
      this.validateStatus();
    }).catch(err => {
      console.log(err)
    })
  }

  validateStatus() {
    if (this.authService.status_user) {
      this.status = true;
      setTimeout(() => {
        this.router.navigate(["/dashboard"])
      }, 1000);
    } else {
      Swal.fire('Por favor verifica tu cuenta!')
    }
  }
}
