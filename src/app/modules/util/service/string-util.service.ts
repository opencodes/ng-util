import { Injectable } from '@angular/core';

@Injectable()
export class StringUtilService {

  constructor() { }

  jsonToQueryString(json) {
    return '?' +
      Object.keys(json).map(function (key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(json[key]);
      }).join('&');
  }

}
