import { NgModule } from '@angular/core';

import { HeroeMainPageComponent } from './main-page/main-page.component';
import { ListComponent } from './list/list.component';

@NgModule({
declarations:[HeroeMainPageComponent, ListComponent], //Todos los componentes del modulo
imports:[],// Solo se agrean otros modulos
providers:[], //Se agregan los servicios
exports: [HeroeMainPageComponent]
})
export class HeroesModule{}
