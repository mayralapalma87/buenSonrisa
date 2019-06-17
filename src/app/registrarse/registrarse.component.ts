import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})

export class RegistrarseComponent implements OnInit {
  email = '';
  pass = '';
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;

  constructor(private router: Router, private authservice: AuthService, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  checkedOS(value) {
// tslint:disable-next-line: no-debugger
    if (value === '2') {
      document.getElementById('obraSocialGroupDiv').style.display = 'inherit';
    } else {
      document.getElementById('obraSocialGroupDiv').style.display = 'none';
    }
  }
  tipoUserChanged(value) {
// tslint:disable-next-line: no-debugger
    if (value === '1') {
     document.getElementById('esPaciente').style.display = 'inherit';
    } else {
      document.getElementById('esPaciente').style.display = 'none';
    }
  }
  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/pofile_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath , file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe( finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }
  onAddUser() {
    this.authservice.onRegisterUser(this.email, this.pass)
    .then((res) => {
      this.router.navigate(['misTurnos']);
    }).catch();
  }
  onLoginFacebook(): void {
    this.authservice.onLoginFacebook()
    .then((res) => {
      this.redirectToPerfil();
    }).catch();
  }
  onLoginGoogle(): void {
    this.authservice.onLoginGoogle()
    .then((res) => {
      this.redirectToPerfil();
    }).catch();
  }
  redirectToPerfil(): void {
      this.router.navigate(['miPerfil']);
  }

}
