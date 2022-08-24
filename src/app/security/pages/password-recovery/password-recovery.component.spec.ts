import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { PasswordRecoveryComponent } from './password-recovery.component';

describe('PasswordRecoveryComponent', () => {
  let component: PasswordRecoveryComponent;
  let fixture: ComponentFixture<PasswordRecoveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),

      ],
      declarations: [PasswordRecoveryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PasswordRecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Creacion del componente Password', () => {
    const fixture = TestBed.createComponent(PasswordRecoveryComponent);
    const recovery = fixture.componentInstance;
    expect(recovery).toBeTruthy();
  });

  it('Debe retornar valido al formulario de recuperar password', () => {
    const fixture = TestBed.createComponent(PasswordRecoveryComponent);
    const recovery = fixture.componentInstance
    fixture.detectChanges()

    const email = recovery.frmPassword.controls['email']
    email.setValue("diego@gmail.com")
    expect(recovery.frmPassword.invalid).toBeFalse();

  })

  it('Envia la recuperacion de la contraseña', () => {
    const fixture = TestBed.createComponent(PasswordRecoveryComponent);
    const recovery = fixture.componentInstance
    fixture.detectChanges()

    const email = recovery.frmPassword.controls['email']
    email.setValue("diego@gmail.com")
    const btnElement = fixture.debugElement.query(By.css("button.btn"))
    btnElement.nativeElement.click();

  })




});
