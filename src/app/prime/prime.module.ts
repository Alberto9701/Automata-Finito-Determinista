import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { SpeedDialModule } from 'primeng/speeddial';
import { DividerModule } from 'primeng/divider';




@NgModule({
  exports: [
    InputTextModule,
    TableModule,
    SpeedDialModule,
    DividerModule
  ]
})
export class PrimeModule { }
