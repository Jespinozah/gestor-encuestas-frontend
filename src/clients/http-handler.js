import { HttpClient } from 'aurelia-fetch-client';
import { constants } from '../util/constants';

export class HttpHandler extends HttpClient {

  constructor() {
    super();

    this.configure(config =>
      config
        .useStandardConfiguration()
        .withDefaults({
          headers: {
            Accept: 'application/json',
            'X-Requested-With': 'Fetch',
          },
        })
        .withBaseUrl(constants.baseUrl));
  }
}
