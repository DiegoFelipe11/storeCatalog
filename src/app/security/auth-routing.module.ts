import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/login/login.component';
import { PasswordRecoveryComponent } from './pages/password-recovery/password-recovery.component';
import { RegisterComponent } from './pages/register/register.component';
const routes: Routes = [
  {
    path: "", component: AuthComponent, children: [
      { path: "Login", component: LoginComponent },
      { path: "Register", component: RegisterComponent },
      { path: "PasswordRecovery", component: PasswordRecoveryComponent },
      { path: "**", redirectTo: "Login" },
    ]
  }
]
@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forChild(routes)

  ]
})
export class AuthRoutingModule { }
