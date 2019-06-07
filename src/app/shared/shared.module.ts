import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { AppRoutingModule } from '../app.route';

@NgModule({
    declarations: [
        NavbarComponent,
        TarjetasComponent,
    ],
    imports: [ CommonModule, AppRoutingModule ],
    exports: [
        NavbarComponent,
        TarjetasComponent,
    ],
    providers: [],
})
export class SharedModule {}