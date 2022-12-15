<script setup>
import { collection, getDocs } from "firebase/firestore";
import { db } from '../utils/firebase'

const superheroes = reactive([]);

async function obtenerSuperheroes(){
  const querySnapshot = await getDocs(collection(db, "superheroes"));
  querySnapshot.forEach((doc) => {
    let superheroe = doc.data();
      superheroe.id = doc.id;
      superheroes.push(superheroe);
      console.log(superheroes);
  });
}
onMounted(() => {
  obtenerSuperheroes()
})

</script>

<template>
  <div class="row justify-content-center">
    <BaseCard
      class="col-4 m-2"
      v-for="superheroe in superheroes"
      :key="superheroe.nombre"
      :superheroe="superheroe"
    />
  </div>
</template>
