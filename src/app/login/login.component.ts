import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WsService } from '../services/ws/ws.service';
import { User } from 'src/clases/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  constructor(private router: Router, private ws: WsService) {
    this.user.email = '';
  }

  user: User = new User('', '');
  url = 'http://localhost:8012/servidor/jwt/';

  enviar() {
    console.log( this.user );
    this.ws.get( {} )
    .then( data => {
      console.log(data);
      if ( data.token ) {
        localStorage.setItem('token', data.token);
        this.router.navigateByUrl('/Turnos');
      }
    })
    .catch( e => {
      console.log(e);
    } );
  }

  volverAlHome() {
    this.router.navigate(['/Turnos']);
  }

  ngOnInit() {
  }
}

