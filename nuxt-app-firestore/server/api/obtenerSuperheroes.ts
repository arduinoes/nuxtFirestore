import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

export default defineEventHandler(async (event) => {
  const superheroesRef = collection(db, 'superheroes');
  const superheroesSnapshot = await getDocs(superheroesRef);
  const superheroes = Array.from(superheroesSnapshot.docs).map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    }
  })
  return superheroes
})