
<template>
  <div>
   

    <!-- Header -->
    <header class="app-header">
      <div class="top-bar">
        <!-- Logo and App Name -->
        <div class="app-name">
       <!-- <img src="" alt="Logo" class="logo" />-->
          <h2 class="name">Ariya</h2>
        </div>

        <!-- Location Info -->
        <div class="location-info">
          <i class="fa fa-map-marker-alt"></i>
          <span class="city-name">{{ location }}</span>
        </div>

        <!-- User Actions -->
        <div class="user-actions">
          <span class="greeting">Augustin</span>
          <div class="dropdown">
            <a href="/profile"><i class="fa fa-user-alt" @click="toggleDropdown"></i>
            <div class="dropdown-menu" v-if="dropdownVisible">
              <a href="#" class="dropdown-item">Profil</a>
              <a href="#" class="dropdown-item">Paramètres</a>
              <a href="#" class="dropdown-item">Déconnexion</a>
            </div>
          </a>
          </div>
        </div>
      </div>

      <!-- Search Bar -->
      <div class="search-bar">
        <i class="fa fa-search search-icon"></i>
        <input
          type="text"
          class="search-input"
          placeholder="Rechercher..."
        />
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "FloatingChat",
  data() {
    return {
      dropdownVisible: false,
      location: "Chargement...",
    };
  },
  mounted() {
    this.getLocation();
  },
  methods: {
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    getLocation() {
      // Utilisation de l'API ip-api
      fetch("http://ip-api.com/json")
        .then((response) => response.json())
        .then((data) => {
          if (data.city) {
            this.location = data.city;
          } else {
            this.location = "Localisation indisponible";
          }
        })
        .catch(() => {
          this.location = "Erreur lors de la récupération de la localisation";
        });
    },
  },
};
</script>

<style scoped>
/* Global styles */

/* Header */
.app-header {
  background: white;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.app-name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo {
  width: 40px;
  height: 40px;
}

.location-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.city-name {
  font-size: 1rem;
  color: var(--text);
}

.user-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.greeting {
  font-size: 0.9rem;
  color: var(--gray);
}

.dropdown {
  position: relative;
}

.dropdown i {
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--text);
}

.dropdown-menu {
  position: absolute;
  right: 0;
  top: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 200;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: var(--text);
  text-decoration: none;
  transition: background 0.2s ease;
}

.dropdown-item:hover {
  background: var(--background);
  border-radius: 5px;
}

/* Search Bar */
.search-bar {
  position: relative;
  margin-top: 0.5rem;
}

.search-input {
  width: 100%;
  padding: 0.8rem 2.5rem;
  border: none;
  background: var(--background);
  border-radius: 12px;
  font-size: 1rem;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--gray);
}

.search-input:focus {
  outline: 2px solid var(--primary);
}
</style>
