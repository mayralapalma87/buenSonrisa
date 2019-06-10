import { PassThrough } from 'stream';
import { Persona } from './persona';

export class Clientes extends Persona {
  public nrocredencial: string;
  public obraSocial: string;
}
