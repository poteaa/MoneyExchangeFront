import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpBackendService } from '../../../core/services/http-backend.service';
import { Converter } from './converter.model';
import 'rxjs/Rx';

@Injectable()
export class ConverterService {
  private url: string = "conversion";
  get conversion() {
    let data = localStorage.getItem(`conversions`)
    if(data) {
      let parsedData = JSON.parse(data);
      let now = new Date();
      let expiration = new Date(parsedData.timestamp);
      expiration.setMinutes(expiration.getMinutes() + 10);
      if (now.getTime() < expiration.getTime()) {
        return parsedData;
      }
    }
    return null;
  }
  set conversion(value: Converter) {
    let data = { value: value, timestamp: new Date().getTime() };
    localStorage.setItem(`conversions`, JSON.stringify(data.value));
  }
  
  constructor(private httpBackendService: HttpBackendService) { }

  convert(sourceId: number): Observable<Converter> {
    if(this.conversion) {
      return Observable.of(this.conversion);
    }
    return this.httpBackendService.get<Converter>(`${this.url}/${sourceId}`)
      .map(conversion => this.conversion = conversion);
  }

}
