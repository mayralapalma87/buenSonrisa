export class User {
  public email = '';
  public clave = '';

  constructor( email: string, clave: string) {
    this.email = email;
    this.clave = clave;
  }
}
