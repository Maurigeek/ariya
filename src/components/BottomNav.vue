<template>
    <nav class="bottom-nav">
      <a href="/" class="nav-item" :class="{ active: isActive('home') }" @click="setActive('home')">
        <i class="fas fa-home"></i>
        <span>Accueil</span>
      </a>
      <a href="/events" class="nav-item" :class="{ active: isActive('explore') }" @click="setActive('explore')">
        <i class="far fa-compass"></i>
        <span>Explorer</span>
      </a>
      <a href="/favoris" class="nav-item" :class="{ active: isActive('tickets') }" @click="setActive('tickets')">
        <i class="fa fa-heart"></i>
        <span>Favoris</span>
      </a>
      <a href="/setting" class="nav-item" :class="{ active: isActive('favorites') }" @click="setActive('favorites')">
        <i class="fa fa-cog"></i>
        <span>Parametre</span>
      </a>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeItem: 'home',
      };
    },
    methods: {
      setActive(item) {
        this.activeItem = item;
      },
      isActive(item) {
        return this.activeItem === item;
      },
    },
  };
  </script>
  
  <style scoped>
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    display: flex;
    justify-content: space-around;
    padding: 0.9rem;
    box-shadow: 0 -2px 15px rgba(0, 0, 0, 0.05);
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    color: #95a5a6;
    text-decoration: none;
    font-size: 0.8rem;
  }
  
  .nav-item.active {
    color:--primary;
  }
  </style>
  