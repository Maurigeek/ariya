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

  { id: 1, name: 'Hackathons', icon: 'fas fa-code' },
  { id: 2, name: 'Conférences IA', icon: 'fas fa-brain' },
  { id: 3, name: 'Entrepreneuriat Numérique', icon: 'fas fa-lightbulb' },
  { id: 4, name: 'Semaine du Numérique', icon: 'fas fa-laptop' },
  { id: 5, name: 'Expositions Technologiques', icon: 'fas fa-robot' }
        ],
        tourismCategories: [
  { id: 1, name: 'Monuments Historiques', icon: 'fas fa-landmark' },
  { id: 2, name: 'Parcs Nationaux', icon: 'fas fa-tree' },
  { id: 3, name: 'Villages Touristiques', icon: 'fas fa-home' },
  { id: 4, name: 'Plages et Bord de Mer', icon: 'fas fa-umbrella-beach' },
  { id: 5, name: 'Sites Culturels', icon: 'fas fa-theater-masks' },
  { id: 6, name: 'Marchés Locaux', icon: 'fas fa-shopping-basket' },
  { id: 7, name: 'Forêts Sacrées', icon: 'fas fa-leaf' },
  { id: 8, name: 'Musées', icon: 'fas fa-university' },
  { id: 9, name: 'Fleuves et Lacs', icon: 'fas fa-water' },
  { id: 10, name: 'Festivals et Célébrations', icon: 'fas fa-music' },
  { id: 11, name: 'Cérémonies Guélédé', icon: 'fas fa-mask' },
  { id: 12, name: 'Festival des Masques de Porto-Novo', icon: 'fas fa-theater-masks' },
  { id: 13, name: 'WeLovEya', icon: 'fas fa-heartbeat' },
  { id: 14, name: 'Fête de la Gaani', icon: 'fas fa-drum' }
],
      };
    },
  };
  </script>
  