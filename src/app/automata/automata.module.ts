import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './pages/main/main.component';
import { EntradaComponent } from './entrada/entrada.component';
import { BandaComponent } from './banda/banda.component';
import { InstrumentoComponent } from './instrumento/instrumento.component';
import { FormsModule } from '@angular/forms';
import { PrimeModule } from '../prime/prime.module';



@NgModule({
  declarations: [
    MainComponent,
    EntradaComponent,
    BandaComponent,
    InstrumentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimeModule
  ],
  exports: [
    MainComponent,
    EntradaComponent,
    BandaComponent,
    InstrumentoComponent
  ]
})
export class AutomataModule { }
