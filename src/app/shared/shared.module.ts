import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoItemComponent } from './info-item/info-item.component';

@NgModule({
    declarations: [
        InfoItemComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        InfoItemComponent]
})
export class SharedModule {
    
}