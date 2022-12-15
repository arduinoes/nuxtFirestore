export default function useTareas() {
  let listaTareas = ref([]);
  function agregarTarea(payload) {
    listaTareas.value = [...listaTareas.value, payload];
  }
  return {
    listaTareas,
    agregarTarea
  };
};

