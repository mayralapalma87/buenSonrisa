import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/clases/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    //public usuario : new User{private email: string , private clave: string};
  }
  onLoginFacebook() {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
    this.router.navigate(['/perfil']);
  }
  onLoginGoogle() {
      this.afAuth.auth.signInWithPopup(new auth.GithubAuthProvider());
      this.router.navigate(['/perfil']);
  }
  onLogout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }


  ngOnInit() {
  }
}

