<script setup>

const { data } = await useFetch('/api/obtenerSuperheroes')

</script>

<template>


  <div class="row justify-content-center">
    <BaseCard
      class="col-4 m-2"
      v-for="superheroe in data"
      :key="superheroe.nombre"
      :superheroe="superheroe"
    />
  </div>
</template>
