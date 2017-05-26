export class Usuario {

  constructor(attributes) {
    this.id = attributes.id || '';
    this.name = attributes.name || '';
    this.username = attributes.username || '';
    this.password = attributes.password || '';
    this.role = attributes.rol || '';
  }
}
