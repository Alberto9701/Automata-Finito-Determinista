import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instrumento',
  templateUrl: './instrumento.component.html',
  styleUrls: ['./instrumento.component.css']
})
export class InstrumentoComponent {
  items: any[]=[1,2,3,4];
  @Input() edo!: Number;

  
}
