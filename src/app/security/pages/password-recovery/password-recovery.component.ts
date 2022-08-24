import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.css']
})
export class PasswordRecoveryComponent implements OnInit {

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  frmPassword: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
  });
  fieldValidator(fiel: string) {
    return this.frmPassword.controls?.[fiel].errors && this.frmPassword.controls?.[fiel].touched
  }

  Recovery() {
    const login = this.frmPassword.getRawValue();
    if (this.frmPassword.invalid) {
      return;
    }
    console.log(login);
    this.authService.recovery(login.email).then(() => {
      Swal.fire('Enviamos un correo para la recuperacion de tu contraseña')
    }).catch(() => {

      Swal.fire('Ocurrio un error')
    })
  }
}
