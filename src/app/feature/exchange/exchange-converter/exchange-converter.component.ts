import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../../authentication/shared/authentication.service';
import { ExchangeService } from '../shared/exchange.service';
import { ExchangeRate } from '../shared/exchange-rate.model';

@Component({
  selector: 'app-exchange-converter',
  templateUrl: './exchange-converter.component.html',
  styleUrls: ['./exchange-converter.component.less']
})
export class ExchangeConverterComponent implements OnInit {
  result: number;
  sourceCurrency = 'USD';
  targetCurrency = 'EUR';

  constructor(private converterService: ExchangeService) { }

  ngOnInit() { }

  onSubmit(f: NgForm) {
    this.converterService.convert(this.sourceCurrency, this.targetCurrency)
      .subscribe((data: ExchangeRate) => {
        this.result = f.value.source * data.rates[this.targetCurrency.toLowerCase()];
        console.log(data);
      });
  }

  onKeyPress(event) {
    return event.charCode >= 48 && event.charCode <= 57 || event.charCode === 46;
  }

}
