import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { HeroeComponent } from './heroe/heroe.component';
import { AppRoutingModule } from '../app.route';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        HomeComponent,
        BuscadorComponent,
        HeroeComponent,
    ],
    imports: [ CommonModule, AppRoutingModule, SharedModule ],
    exports: [],
    providers: [],
})
export class PagesModule {}