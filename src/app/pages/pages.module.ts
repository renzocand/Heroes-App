import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HeroeComponent } from './heroe/heroe.component';

@NgModule({
    declarations: [
        HomeComponent,
        BuscadorComponent,
        HeroeComponent
    ],
    imports: [ CommonModule ],
    exports: [],
    providers: [],
})
export class PagesModule {}