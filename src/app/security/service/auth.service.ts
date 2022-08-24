import { Injectable } from '@angular/core';
import { User } from '../interface/Iuser';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string;
  private status: boolean;
  constructor(public afAuth: AngularFireAuth,
    public afs: AngularFirestore,) {
    this.token = "";
    this.status = false;
  }

  get status_user() {
    return this.status;
  }

  /**
  * metodo para iniciar sesion en la app
  * @param email
  * @param password
  */

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (this.verificacionEmail(result)) {
          this.getUserToken();
          this.status = true;
        }
      })

      .catch((error) => {
        console.log(error);
      });
  }
  /**
   * Metodo para verificar si la cuenta se encuentra activa
   * @param result 
   * @returns verdadero o false
   */

  verificacionEmail(result: any): boolean {
    if (result.user?.emailVerified) {
      return true;
    }
    return false;
  }
  /**
   * Metodo para realizar el registro de usuario
   * @param name 
   * @param email 
   * @param password 
   */
  SignUp(name: string, email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password).then((result) => {
        this.SetUserData(result.user, name);
        this.verifyAccount()
      }).catch((error) =>
        console.log(error)
      )
  }

  /**
  * Metodo par enviar el correo de verificacion al usuario
  * @param email
  */

  verifyAccount() {
    this.afAuth.currentUser.then(user =>
      user?.sendEmailVerification())
  }

  /**
   * Metodo para la creacion de una coleccion de usuarios
   * @param user
   * @returns
   */
  async SetUserData(user: any, name: string) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      name: name,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return await userRef.set(userData, {
      merge: true,
    });
  }

  /**
 * metodo que retonar el usuario logeado
 * @returns usuario logeado
 */
  getUserLogged() {
    this.afAuth.authState.subscribe((user) =>
      console.log(user)
    );
  }

  /**
   * Metodo para obtener el token del usuario 
   * que ingreso al aplicativo por medio del incio de sesion
   */
  getUserToken(): void {
    this.afAuth.currentUser.then((user) => {
      user?.getIdToken().then((token) => {
        console.log(token)
        this.token = token;
        localStorage.setItem("token", token);
      });
    });

  }

  /**
   * metodo para verificar si un usuario esta activo
   * @returns
   */
  verifySession(): Observable<boolean> {
    if (!localStorage.getItem("token")) {
      return of(false);
    }
    return of(true);
  }

  recovery(email: string) {
    return this.afAuth
      .sendPasswordResetEmail(email)

  }
}
