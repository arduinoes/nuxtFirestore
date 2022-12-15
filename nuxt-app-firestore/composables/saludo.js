
function agregar(payload) {
  let listaTareas = ref([]);
  listaTareas.value = [...listaTareas.value, payload];
  return listaTareas.value;
  }


export const useTareas = () => {
  return useState('agregarTarea', () => agregar(payload));
}