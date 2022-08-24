import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { By } from '@angular/platform-browser';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
      ],
      declarations: [LoginComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Creacion del componente Login', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  });

  it('Debe retornar invalido al formulario', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance
    fixture.detectChanges()

    const email = login.frmLogin.controls['email']
    email.setValue("diego@gmail.com")
    const password = login.frmLogin.controls['password']
    expect(login.frmLogin.invalid).toBeTrue();

  })
  /*
  it('Inicia sesion', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const login = fixture.componentInstance
    fixture.detectChanges()

    const email = login.frmLogin.controls['email']
    email.setValue("diegofelipem99@gmail.com")
    const password = login.frmLogin.controls['password']
    password.setValue("diego1234")
    expect(login.frmLogin.invalid).toBeTrue();
    const btnElement = fixture.debugElement.query(By.css("button.btn"))
    btnElement.nativeElement.click();
  })*/
});
