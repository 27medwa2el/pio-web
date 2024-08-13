import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateFormatterService {

  constructor() { }

  getFormattedDate(dateString: string): string {
    const language = localStorage.getItem('language');
    const date = new Date(dateString);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? (language === 'ar' ? 'م' : 'pm') : (language === 'ar' ? 'ص' : 'am');
    hours = hours % 12;
    hours = hours ? hours : 12;
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${hours}:${minutes}${ampm}`;
  }
}
