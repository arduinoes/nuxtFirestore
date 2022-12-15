const ahora = Date.now();
const hoy = new Date(ahora);
const local = hoy.toLocaleTimeString()

export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
      provide: {
        hoy: hoy,
        ahora: ahora,
        local: local
      }
    }
  })
  