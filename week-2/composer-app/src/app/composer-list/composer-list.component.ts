/**
 * Title: composer-list.component.ts
 * Author: George Taylor
 * Date: 14 April 2024
 * Description: Composer list component; displays a list of composers
 */

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: String;
  genre: String;

   constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
   }
}
@Component ({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor()  {
    this.composers = [
      new Composer("Johann Sebastian Bach","Classical"),
      new Composer("Pyotr Ilyich Tchaikovsky","Classical"),
      new Composer("Claude Debussy","Classical"),
      new Composer("Richard Wagner","Classical"),
      new Composer("Frederic Chopin","Classical")
    ]
  }

  ngOnInit(): void {
  }

}
