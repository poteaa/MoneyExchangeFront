import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConverterComponent } from './converter.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ConverterComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ConverterComponent
    ]
})
export class ConverterModule {

}