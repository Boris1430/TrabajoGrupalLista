import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Persona } from '../../datasource/persona.interface';

@Component({
  selector: 'app-modalpersonas',
  templateUrl: './modalpersonas.component.html',
  styleUrl: './modalpersonas.component.css'
})
export class ModalpersonasComponent {

  @Input()
  modalid: string = 'modalejemplo';

  @Input()
  personas: Persona = {
    id: 0,
    nombres: '',
    edad: 0,
    email: '',
    celular: '',
  };
  @Output() Emmiter=new EventEmitter<Persona>()

  guardar(){
this.Emmiter.emit(this.personas)
  }

}
