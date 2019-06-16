import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/clases/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from '../../app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private authservice: AuthService) {
    // public usuario : new User{private email: string , private clave: string};
  }

  onLogout(): void {
    this.authservice.onLogout()
    .then((res) => {
        this.router.navigate(['../login']);
    }).catch();
  }
  onLoginFacebook(): void {
    this.authservice.onLoginFacebook()
    .then((res) => {
        this.router.navigate(['../perfil']);
    }).catch();
  }
  onLoginGoogle(): void {
    this.authservice.onLoginGoogle()
    .then((res) => {
        this.router.navigate(['../perfil']);
    }).catch();
  }
  onLoginEmailUser(email: string, pass: string) {}
  ngOnInit() {
  }
}

