import { Component } from '@angular/core';
import { HeroComponent } from './heroes/hero/hero.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'hola mundo';
  public counter: number = 10;

  increaseBy():void {
    this.counter += 1;
  }

  increm():void{
    this.counter -=1;
  }

  reset():void{
    this.counter =0;
  }


}


