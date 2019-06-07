import { Component, OnInit, Input, Output } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() heroe:Heroe

  @Output() redirigir = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isHeroe(){
  }

}
