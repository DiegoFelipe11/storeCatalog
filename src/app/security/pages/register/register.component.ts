import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  status: boolean;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.status = false;
  }

  ngOnInit(): void {
  }

  frmRegister: FormGroup = this.fb.group({
    name: ["", [Validators.required, Validators.minLength(8)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  })
  fieldValidator(fiel: string) {
    return this.frmRegister.controls?.[fiel].errors && this.frmRegister.controls?.[fiel].touched
  }

  registerAcoount() {
    if (this.frmRegister.invalid) {
      return;
    }
    const user = this.frmRegister.getRawValue();
    this.authService.SignUp(user.name, user.email, user.password).then(() => {
      this.frmRegister.reset();
      Object.keys(this.frmRegister.controls).forEach(key => {
        this.frmRegister.get(key)?.setErrors(null);
      });
      Swal.fire("Registro exitoso se envio un correo para validar tu cuenta")
      this.status = true;
    }).catch(() => {
      this.status = false;
      console.log("fallido")
    });
  }

}
