import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { auth } from 'firebase';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afsauth: AngularFireAuth) { }

  isAuth() {
// tslint:disable-next-line: no-shadowed-variable
    return this.afsauth.authState.pipe(map(auth => auth));
  }

  onLoginFacebook() {
    return this.afsauth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  onLoginGoogle() {
    return this.afsauth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  onLoginEmailUser(email: string, pass: string) {
    // tslint:disable-next-line: no-unused-expression
// tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, reject) => {
      this.afsauth.auth.signInWithEmailAndPassword(email, pass)
        .then(userData => resolve(userData), err => reject(err));
    });
  }
  onLogout() {
    return this.afsauth.auth.signOut();
  }
}
