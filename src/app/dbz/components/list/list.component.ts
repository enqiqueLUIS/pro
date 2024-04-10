import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListDbzComponent {

  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

}
