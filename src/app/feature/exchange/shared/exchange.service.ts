import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpBackendService } from '../../../core/services/http-backend.service';
import { ExchangeRate } from './exchange-rate.model';
import 'rxjs/Rx';

@Injectable()
export class ExchangeService {
  private readonly convertUrl = 'exchange';
  private readonly allConversionsUrl = 'exchange/rates';
  get conversion() {
    const data = localStorage.getItem(`conversions`);
    if (data) {
      const parsedData = JSON.parse(data);
      const now = new Date();
      const expiration = new Date(parsedData.timestamp);
      expiration.setMinutes(expiration.getMinutes() + 10);
      if (now.getTime() < expiration.getTime()) {
        return parsedData;
      }
    }
    return null;
  }
  set conversion(value: ExchangeRate) {
    const data = { value: value, timestamp: new Date().getTime() };
    localStorage.setItem(`conversions`, JSON.stringify(data.value));
  }

  constructor(private httpBackendService: HttpBackendService) { }

  convert(sourceCurrency: string, targetCurrency: string): Observable<ExchangeRate> {
    if (this.conversion) {
      return Observable.of(this.conversion);
    }
    return this.httpBackendService.get<ExchangeRate>(
      `${this.convertUrl}?base=${sourceCurrency}&symbols=${targetCurrency}`)
      .map(conversion => this.conversion = conversion);
  }

  getExchangeRates(sourceCurrency: string): Observable<ExchangeRate> {
    return this.httpBackendService.get<ExchangeRate>(
      `${this.allConversionsUrl}?base=${sourceCurrency}`);
  }

}
