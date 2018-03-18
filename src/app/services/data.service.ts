import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Holiday } from '../models/Holiday';
import 'rxjs/add/operator/map'; 

@Injectable()
export class HolidayService{
  private baseUrl: string = 'https://holidayapi.com/v1/holidays';
  private key: string = 'cc66d34b-ff66-450d-8864-c7f0a339d563';
  constructor(private http : Http){}

  getAll(): Observable<Holiday[]>{
    let holiday$ = this.http
      .get(`${this.baseUrl}?key=${this.key}&country=US&year=2017`)
      .map(mapHolidays);
    return holiday$;
    
  }
// detail portion 
  getPost(name:string): Observable<Holiday[]>{
    let holiday$ = this.http
      .get(`${this.baseUrl}?key=${this.key}&country=US&year=2017/name`)
      .map(mapHolidays);
    return holiday$;
  }
}

function mapHolidays(response: Response): Holiday[]{
  console.log(response.json());
  let holidays = response.json().holidays;
  Object.keys(holidays).map(e => console.log(`key=${e}  value=${holidays[e]}`));
  if (Array.isArray(holidays)) {
    return holidays.map(toHoliday);
  }
  else {
    let holidayArr = Object.keys(holidays).map( k=> {
      return holidays[k];
    });
    holidayArr = holidayArr.reduce((a,b) => a.concat(b), []);
    console.log(holidayArr);
    return holidayArr;
  }
}

function mapHoliday(response: Response): Holiday{
  return toHoliday(response.json());
}

function toHoliday(r:any):Holiday{
  let holiday = <Holiday>({
    name: r.name,
    date: r.date,
    observed: r.observed,
    public: r.public
  });
  return holiday;
}
  
