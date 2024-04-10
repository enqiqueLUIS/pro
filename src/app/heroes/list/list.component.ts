import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

    public heroNames: string[] = ['Spiderman','Iroman','Batman','Superman'];
    public deleteHero?: string;

    removeLasHero():void{
      this.deleteHero = this.heroNames.pop();
    }

  }
