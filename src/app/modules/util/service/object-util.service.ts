import { Injectable } from '@angular/core';

@Injectable()
export class ObjectUtilService {

  constructor() { }

  jsonToQueryString(json) {
    return '?' +
      Object.keys(json).map(function (key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(json[key]);
      }).join('&');
  }
}
