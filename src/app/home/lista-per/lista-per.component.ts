import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/personajes.service';

@Component({
  selector: 'app-lista-per',
  templateUrl: './lista-per.component.html',
  styleUrls: ['./lista-per.component.css']
})
  export class ListaPerComponent implements OnInit{

    maxPersonajes:number = 12;

    personajes:any = null;
    personaje:any = null;

  // Constructores
  constructor(private personajesService: PersonajesService){ };
  
  ngOnInit():void{
    this.personajesService.getPersonajes(this.maxPersonajes).subscribe( result => this.personajes = result);
  };
  
  seleccionar(id:number){
    this.personaje = id;
    this.personajesService.getPersonajeId(id).subscribe( result => this.personaje = result);
  };
}
