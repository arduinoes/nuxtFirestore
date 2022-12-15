import { defineStore } from 'pinia'
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { db } from "../utils/firebase"

export const almacen = defineStore('main', {
  state: () => {
    return {
      superheroes: []
    }
  },
  actions: {
    async obtenerSuperheroes(){
      const querySnapshot = await getDocs(collection(db, "superheroes"));
      querySnapshot.forEach((doc) => {
        let superheroe = doc.data();
          superheroe.id = doc.id;
          this.superheroes.push(superheroe);
          console.log(this.superheroes);
      });
    }
  }
})
