import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompartirService {

  private atributoString: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public setAtributoString(valor: string): void {
    this.atributoString.next(valor);
  }

  public getAtributoString(): Observable<string> {
    return this.atributoString.asObservable();
  }
}
