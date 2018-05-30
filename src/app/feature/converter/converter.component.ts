import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConverterService } from './shared/converter.service';
import { Converter } from './shared/converter.model';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.less']
})
export class ConverterComponent implements OnInit {
  result: number;
  constructor(private converterService: ConverterService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    this.converterService.convert(1)
      .subscribe((data:Converter) => {
        this.result = f.value.source*data.rates["eur"];
        console.log(data);
      });
  }

  onKeyPress(event) {
    return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46;
  }
}
