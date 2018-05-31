import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './converter.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
    declarations: [
        ConverterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        ConverterComponent
    ]
})
export class ConverterModule {

}