<script setup>
import { onMounted } from 'vue'
import { almacen } from '../stores/almacen'

const store = almacen()

onMounted(() => {
   store.obtenerSuperheroes()
})
</script>

<template>
    <div class="row justify-content-center">
      <BaseCard
      class="col-4 m-2"
      v-for="superheroe in store.superheroes"
      :key="superheroe.nombre"
      :superheroe="superheroe"
      />
    </div>
  </template>
  