import { inject } from 'aurelia-framework';
import { Usuario } from '../models/usuario';
import { Client } from './client';

@inject(Client)
export class UsuarioClient {

  constructor(client) {
    this.client = client;
  }

  getProfileInformation(username) {
    return this.requestRawProfileInformation(username)
      .then(response => response.json())
      .then(response => new Usuario(response));
  }

  requestRawProfileInformation(username) {
    return this.client.getFrom(`/profileApi/profile/${username}`);
  }
}
