import { Component } from '@angular/core';
import { Persona } from '../../../datasource/persona.interface';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {

  personas:Persona[]=[];

  guardar(persona:Persona){
    this.personas.push(persona);
  }
}
