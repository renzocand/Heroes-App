import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  indice:number;
  heroeDB: Heroe

  constructor(private activatedRoute:ActivatedRoute, private _hs:HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((param:object)=>{
      this.indice = param['id'];
      this.heroeDB = this._hs.getHeroe(this.indice );
      console.log(this.heroeDB);
    })
  }

}
