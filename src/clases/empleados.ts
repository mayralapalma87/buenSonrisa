import { Persona } from './persona';
import { Turnos } from './turnos';

export class Empleados extends Persona{
  public rol: string;
  public idEmpleado: Int32Array;
  public turnos: Array<Turnos>;
}
