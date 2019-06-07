import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  buscando:string;
  arrayHeroes:Heroe[];

  constructor(private activatedRoute:ActivatedRoute, private _hs:HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param=>{
      this.buscando = param['id']
      this.arrayHeroes = this._hs.buscarHeroes(this.buscando);
      console.log(this.arrayHeroes);
    })
  }

}
