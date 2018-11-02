import { Component, OnInit } from '@angular/core';
import { ExchangeService } from './shared/exchange.service';
import { ExchangeRate } from './shared/exchange-rate.model';

@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.less']
})
export class ExchangeComponent implements OnInit {
  exchangeRate: ExchangeRate;
  sourceCurrency = 'USD';

  constructor(private exchangeService: ExchangeService) { }

  ngOnInit() {
    this.exchangeService.getExchangeRates(this.sourceCurrency)
      .subscribe((data: ExchangeRate) => {
        const tmpExchange: ExchangeRate = data;
        let rates: { name: string, value: number } [];
        rates = Object.keys(data.rates).map(dr => {
          return { name: dr, value: data.rates[dr]};
        });
        this.exchangeRate = data;
        this.exchangeRate.rates = rates;
      });
  }

}
