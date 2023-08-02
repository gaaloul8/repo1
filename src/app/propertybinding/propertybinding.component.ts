import { Component } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {
  titre:string="Property Binding";
  nom:string="ben test";
  actif:boolean=false; 

}
