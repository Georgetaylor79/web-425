import { IComposer } from "./composer.interface";
export class Composer {
     composers: Array<IComposer>;

   constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Johann Sebastian Bach", genre: "Classical"
      },

      {
        composerId: 101, fullName: "Pyotr Ilyich Tchaikovsky", genre: "Classical"
      },

      {
        composerId: 102, fullName: "Claude Debussy", genre: "Classical"
      },

      {
        composerId: 103, fullName: "Richard Wagner", genre: "Classical"
      },

      {
        composerId: 104, fullName: "Frederic Chopin", genre: "Classical"
      },

    ]
 }

 getComposers() {
      return this.composers;
 }
getComposer(composerId: number) {
  for (let composer of this.composers) {
       if (composer.composerId === composerId) {
            return composer;
       }
  }
}

}
