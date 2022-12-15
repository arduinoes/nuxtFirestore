export default defineNuxtPlugin((/* nuxtApp */) => {
    return {
      provide: {
        saludo: () => 'Hola Miranda'
      }
    }
  })
  