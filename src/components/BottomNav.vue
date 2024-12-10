<template>
  <nav class="bottom-nav">
    <!-- Home -->
    <a href="/" class="nav-item" :class="{ active: isActive('home') }" @click="setActive('home')">
      <i class="fas fa-home"></i>
      <span>Accueil</span>
    </a>

    <!-- Explorer -->
    <a href="/favoris" class="nav-item" :class="{ active: isActive('favoris') }" @click="setActive('favoris')">
      <i class="far fa-heart"></i>
      <span>Favoris</span>
    </a>

    <!-- Favoris -->
    <a href="/help" class="nav-item" :class="{ active: isActive('help') }" @click="setActive('help')">
      <i class="fa fa-comments"></i>
      <span>Aides</span>
    </a>

    <!-- Mon compte -->
    <a href="/profile" class="nav-item" :class="{ active: isActive('profile') }" @click="setActive('profile')">
      <i class="fa fa-user"></i>
      <span>Mon Compte</span>
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      activeItem: 'home', // Définir "home" comme actif par défaut
    };
  },
  methods: {
    setActive(item) {
      this.activeItem = item; // Définit l'élément actif
    },
    isActive(item) {
      return this.activeItem === item; // Vérifie si l'élément est actif
    },
  },
};
</script>

<style scoped>
/* Styles pour la barre de navigation inférieure */
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.8rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  border-top: 1px solid #f0f0f0;
}

/* Style des éléments */
.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  font-size: 0.85rem;
  color: #95a5a6;
  transition: color 0.3s ease;
}

/* Icônes et texte des éléments actifs */
.nav-item.active {
  color: --primary; /* Couleur primaire pour l'élément actif */
}

.nav-item i {
  font-size: 1.2rem;
}

/* Responsivité */
@media (max-width: 480px) {
  .nav-item span {
    font-size: 0.75rem; /* Réduction de la taille du texte pour les petits écrans */
  }

  .nav-item i {
    font-size: 1rem; /* Réduction de la taille des icônes */
  }
}
</style>
