import { turnoInteface } from './../models/turnoInterface';
import { AuthService } from './auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Turno } from '../models/turno';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

// tslint:disable-next-line: max-line-length
  constructor(private afs: AngularFirestore) {
    this.listaTurnos = afs.collection<turnoInteface>('turnos');
    this.turnos = this.listaTurnos.valueChanges();
  }

  private listaTurnos: AngularFirestoreCollection<turnoInteface>;
  private turnos: Observable<turnoInteface[]>;

  getTurnos() {
    return this.turnos = this.listaTurnos.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
          const data = action.payload.doc.data() as turnoInteface;
          data.id = action.payload.doc.id;
          return data;
      });
    }));
  }
  agregarTurnos() {

  }
  modificarTurnos() {

  }
  borrarTurno() {

  }

}
