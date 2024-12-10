<template>
    <div class="categories-container">
      <div
        v-if="activeType === 'events'"
        class="categories"
      >
        <div class="category-chip" v-for="category in eventCategories" :key="category.id">
          <i :class="category.icon"></i>
          <span>{{ category.name }}</span>
        </div>
      </div>
      <div
        v-if="activeType === 'tourism'"
        class="categories"
      >
        <div class="category-chip" v-for="category in tourismCategories" :key="category.id">
          <i :class="category.icon"></i>
          <span>{{ category.name }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Categories',
    props: {
      activeType: String,
    },
    data() {
      return {
        eventCategories: [
          { id: 1, name: 'Tendances', icon: 'fas fa-star' },
          { id: 2, name: 'Conférences', icon: 'fas fa-microphone' },
          { id: 3, name: 'Réseautage', icon: 'fas fa-handshake' },
          { id: 4, name: 'Concerts', icon: 'fas fa-music' },
          { id: 5, name: 'Formation', icon: 'fas fa-graduation-cap' },
          { id: 6, name: 'Tech', icon: 'fas fa-laptop-code' },
        ],
        tourismCategories: [
          { id: 1, name: 'Populaires', icon: 'fas fa-compass' },
          { id: 2, name: 'Historique', icon: 'fas fa-monument' },
          { id: 3, name: 'Plages', icon: 'fas fa-umbrella-beach' },
          { id: 4, name: 'Parcs', icon: 'fas fa-tree' },
          { id: 5, name: 'Gastronomie', icon: 'fas fa-utensils' },
          { id: 6, name: 'Culture', icon: 'fas fa-mask' },
        ],
      };
    },
  };
  </script>
  