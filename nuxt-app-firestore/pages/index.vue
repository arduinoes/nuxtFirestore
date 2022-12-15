<script setup>
import useTareas from "~~/composables/tareas";

const agregarTarea = useTareas()

let listaTareas = ref([]);

//const { agregarTarea } = useTareas();

const dato = reactive({
  tarea: "",
});

function agregarLista() {
  agregarTarea(dato.tarea);

  console.log("Tarea: ", todoList);
  console.log("tarea: ", dato.tarea);
}
</script>

<template>
  <div class="container">
    <h1>Composables</h1>
    <div class="container">
      <Input @keyup.enter="agregarLista" v-model="dato.tarea" type="text" label="Tarea" />
      <button class="btn btn-primary" @click="agregarLista">Añadir tarea</button>
    </div>
    <ul v-for="tarea in listaTareas">
      <li>{{ tarea }}</li>
     
    </ul>
  </div>
</template>
