<template>
    <button class="fab" @click="onClick">
      <i class="fas fa-plus"></i>
    </button>
  </template>
  
  <script>
  export default {
    methods: {
      onClick() {
        console.log('Bouton flottant cliqué !');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Copiez les styles pertinents ici */
  </style>
  