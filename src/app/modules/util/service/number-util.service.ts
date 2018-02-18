import { Injectable } from '@angular/core';

@Injectable()
export class NumberUtilService {

  constructor() { }
  /**
   * Convert number into zerofill
   * @param d
   */
  twoDigits(d) {
    if (0 <= d && d < 10) { return '0' + d.toString(); }
    if (-10 < d && d < 0) { return '-0' + (-1 * d).toString(); }
    return d.toString();
  }
}
