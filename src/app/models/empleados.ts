import { Persona } from './persona';
import { Turno } from './turno';

export class Empleados extends Persona{
  public rol: string;
  public idEmpleado: Int32Array;
  public turnos: Array<Turno>;
}
