import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public name: string = 'Batman'
  public age: number = 35

  get capitalizeName():string{
    return this.name.toLowerCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeName(): void{
    this.name = 'superman'
  }

  changeAge(): void{
    this.age = 100
  }

  resetForm() {
    this.name = 'Batman'
    this.age = 35
  }
}
