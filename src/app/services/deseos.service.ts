import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
// 

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];


  constructor() {

    //Creo listas
    const lista1 = new Lista('Recoger piedras del infinito');
    const lista2 = new Lista('Heroes a desaparacer');
    
    //pusheo las constantes en listas
    this.listas.push(lista1,lista2);

    //Observo el resultado 
    console.log(this.listas);

   }
}
