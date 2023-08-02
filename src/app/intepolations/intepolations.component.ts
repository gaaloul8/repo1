import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-intepolations',
  templateUrl: './intepolations.component.html',
  styleUrls: ['./intepolations.component.css']
})
export class IntepolationsComponent implements OnInit {

  titre:string="Interpolation";
  nom:string="AZIZ";
  age:number=23;
  constructor(){}
  ngOnInit():void{
  }
  infos(){
    return this.nom + " a pour âge " + this.age +" ans.";
    } 
}
