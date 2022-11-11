import { Component,  } from '@angular/core';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  get heroes(){
    return this.heroreService.heroes;
  }
  constructor(private readonly heroreService: HeroesService){

  }


}
