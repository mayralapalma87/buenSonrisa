import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor() { }

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
}
