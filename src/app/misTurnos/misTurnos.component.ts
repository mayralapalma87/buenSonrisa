import { DataApiService } from './../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'app-misTurnos',
  templateUrl: './misTurnos.component.html',
  styleUrls: ['./misTurnos.component.css']
})
export class MisTurnosComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public turnos = [];
  public turno = '';

  ngOnInit() {
    this.getTurnos();
  }

  getTurnos() {
    this.dataApi.getTurnos().subscribe( turnos => {
      this.turnos = turnos;
    });
  }
  public reiniciar() {
    this.turnos = [];
  }
}
