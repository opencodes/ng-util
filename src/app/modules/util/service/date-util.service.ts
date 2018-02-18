import { StringUtilService } from './string-util.service';
import { Injectable } from '@angular/core';
import { NumberUtilService } from './number-util.service';

@Injectable()
export class DateUtilService {

  constructor(private _strUtilSvc: NumberUtilService, private _numberUtilSvc: NumberUtilService) { }

  /**
   * toMysqlFormat
   * @param dateStr
   */
  toMysqlFormat(dateStr) {
    const dateObj = new Date(dateStr);
    console.log(dateObj);
    const d = new Date();
    dateObj.setUTCDate(dateObj.getUTCDate() + 1);
    let newDate = '';
    newDate += dateObj.getUTCFullYear();
    newDate += '-';
    newDate += this._numberUtilSvc.twoDigits(1 + dateObj.getUTCMonth());
    newDate += '-';
    const dat = dateObj.getUTCDate();
    newDate += this._numberUtilSvc.twoDigits(dateObj.getUTCDate());
    newDate += ' ';
    newDate += this._numberUtilSvc.twoDigits(dateObj.getUTCHours());
    newDate += ':';
    newDate += this._numberUtilSvc.twoDigits(dateObj.getUTCMinutes());
    newDate += ':';
    newDate += this._numberUtilSvc.twoDigits(dateObj.getUTCSeconds());

    console.log(newDate);
    return newDate;
  }
  /**
   * toMysqlDate
   * @param dateStr
   */
  toMysqlDate(dateStr) {
    const dateObj = new Date(dateStr);
    return dateObj.getUTCFullYear() + '-' + this._numberUtilSvc.twoDigits(1 + dateObj.getUTCMonth()) + '-'
      + this._numberUtilSvc.twoDigits(dateObj.getUTCDate());
  }
  /**
   * nextMonth
   * @param dateStr
   * @param n
   */
  nextMonth(dateStr: string, n: number) {
    const dateObj = new Date(dateStr);
    console.log(dateObj.toDateString());
    dateObj.setMonth(dateObj.getMonth() + n, dateObj.getDate());
    console.log(dateObj.toDateString());
    return dateObj.getUTCFullYear() + '-' + this._numberUtilSvc.twoDigits(1 + dateObj.getUTCMonth()) + '-'
      + this._numberUtilSvc.twoDigits(dateObj.getUTCDate());

  }
}
