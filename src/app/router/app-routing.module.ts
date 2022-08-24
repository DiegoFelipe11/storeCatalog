import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../dashboard/home/home.component';
import { AuthGuard } from '../security/guard/auth.guard';
const routes: Routes = [
  {
    path: "auth", loadChildren: () => import("../security/auth.module").then(m => m.AuthModule)
  },
  {
    path: "dashboard", component: HomeComponent,
    canLoad: [AuthGuard], // prevenir la carga de un componente
    canActivate: [AuthGuard] //previene que el usuario ingrese a una ruta en especifico
  }
]

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
