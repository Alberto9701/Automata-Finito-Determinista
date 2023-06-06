import { Component, OnInit } from '@angular/core';
import { CompartirService } from '../services/compartir.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit{
  value: string = "";
  alfabeto: string[]=["a","b","c"];
  valido!: boolean;
  i!: number;
  arreglo: string[] =[];
  edo: Number = 0;


  constructor(private compartirService: CompartirService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("entro")

  }

  imprimir(){
    console.log(this.value);
    console.log(typeof(this.value[this.i]))

  }

  comprobar(){
    this.edo=0;

    for(this.i=0; this.i<this.value.length;this.i++){

      console.log("el valor de edo es: ", this.edo);
      switch(this.value[this.i]){
        case "a":	if(this.edo==0)	this.edo=4;
						else if(this.edo==1)	this.edo=2;
						else if(this.edo==2)	this.edo=4;
						else if(this.edo==3)	this.edo=4;
						else if(this.edo==4)	this.edo=4;
						break;
			case "b":	if(this.edo==0)	this.edo=1;
						else if(this.edo==1)	this.edo=1;
						else if(this.edo==2)	this.edo=4;
						else if(this.edo==3)	this.edo=4;
						else if(this.edo==4)	this.edo=4;
						break;
			case "c":	if(this.edo==0)	this.edo=3;
						else if(this.edo==1)	this.edo=4;
						else if(this.edo==2)	this.edo=4;
						else if(this.edo==3)	this.edo=3;
						else if(this.edo==4)	this.edo=4;
						break;
      }


      if(this.alfabeto.includes(this.value[this.i])===false || this.edo===4){
        this.valido=false;
        this.edo=4;
        break;
      }
      else{
        this.valido=true;
        this.arreglo = Array.from(this.value);
      }

    }

  }


  public enviarAtributo():void{
    const value:string = this.value;
    this.compartirService.setAtributoString(value);
  }

}
