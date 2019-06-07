import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  heroes:any[] = [];

  constructor(private _hs:HeroesService, private router:Router) { }

  ngOnInit() {
    this.heroes = this._hs.getHeroes();
    console.log(this.heroes);
  }

  irHeroe(idx){
    this.router.navigate(['/heroe',idx])
  }

}
