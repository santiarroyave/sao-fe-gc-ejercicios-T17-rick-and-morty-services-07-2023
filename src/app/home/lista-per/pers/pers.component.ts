import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pers',
  templateUrl: './pers.component.html',
  styleUrls: ['./pers.component.css']
})
export class PersComponent {

  @Input() seleccionado:any;

  cerrar(){
    this.seleccionado = "";
  }

}
