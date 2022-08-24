import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../service/auth.service';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),

      ],
      declarations: [RegisterComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creacion del componente Registrar usuario ', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const register = fixture.componentInstance;
    expect(register).toBeTruthy();
  });

  it('Debe retornar valido al formulario de registro de usuario', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const register = fixture.componentInstance
    fixture.detectChanges()

    const email = register.frmRegister.controls['email']
    email.setValue("diego@gmail.com")
    const password = register.frmRegister.controls['password']
    password.setValue("diego1234")
    expect(register.frmRegister.invalid).toBeTrue();

  })

  it('Creacion de una cuenta', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const register = fixture.componentInstance
    fixture.detectChanges()

    const name = register.frmRegister.controls['name']
    name.setValue("diego felipe muñoz")
    const email = register.frmRegister.controls['email']
    email.setValue("diego@gmail.com")
    const password = register.frmRegister.controls['password']
    password.setValue("diego1234")
    const btnElement = fixture.debugElement.query(By.css("button.btn"))
    btnElement.nativeElement.click();


  })
});
