import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ExchangeComponent } from './exchange.component';
import { ExchangeConverterComponent } from './exchange-converter/exchange-converter.component';

@NgModule({
    declarations: [
        ExchangeComponent,
        ExchangeConverterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        ExchangeComponent,
        ExchangeConverterComponent
    ]
})
export class ExchangeModule { }
