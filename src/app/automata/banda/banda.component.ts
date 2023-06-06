import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CompartirService } from '../services/compartir.service';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {
  @Input() arreglo!: any;
  @Input() valido!: boolean;
  @ViewChild("miEntrada") miEntrada!:any ;
  //arreglo: string[] =[];

  constructor(private compartirService: CompartirService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("iniciando");

    //this.arreglo=Array.from(this.value);

    /*
    this.compartirService.getAtributoString().subscribe( resp =>{
      this.arreglo = Array.from(resp);
      console.log(this.arreglo);
    })
    */


  }

  letras: any[]=["a","b","c"];


  impresion(){
    console.log(this.arreglo);
  }

}
