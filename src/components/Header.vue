<template>
  <div>
    <!-- Header -->
    <header class="app-header">
      <div class="top-bar">
        <!-- Logo -->
        <div class="app-name">
          <img :src="imageSrc" alt="Logo" class="logo" />
        </div>

        <!-- Location Info -->
        <div class="location-info">
          <i class="fa fa-map-marker-alt"></i>
          <span class="city-name">{{ location }}</span>
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
import logo from "@/assets/images/logo.png";

export default {
  name: "FloatingChat",
  data() {
    return {
      location: "Chargement...",
      imageSrc: logo, // URL de l'image
    };
  },
  mounted() {
    this.getLocation();
  },
  methods: {
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
/* Header */
.app-header {
  background: white;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

/* Top Bar */
.top-bar {
  display: flex;
  justify-content: space-between; /* Garde le logo et la localisation à chaque extrémité */
  align-items: center;
}

/* Logo Section */
.app-name .logo {
  height: 40px;
  object-fit: contain;
}

/* Location Info Section */
.location-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #555;
}

.location-info .fa-map-marker-alt {
  color: #007bff;
  font-size: 1.2rem;
}

/* Search Bar */
.search-bar {
  position: relative;
  margin-top: 1rem;
}

.search-input {
  width: 100%;
  padding: 0.8rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  font-size: 1rem;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
}

.search-input:focus {
  outline: none;
  border-color: #007bff;
}

/* Responsiveness */
@media (max-width: 768px) {
  .top-bar {
    flex-direction: row; /* Garde les éléments en ligne */
    justify-content: space-between;
    padding: 0.5rem;
  }

  .app-name .logo {
    height: 30px;
  }

  .location-info {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .top-bar {
    flex-wrap: nowrap; /* Empêche les éléments de passer à la ligne */
    gap: 1rem;
  }

  .app-name .logo {
    height: 30px;
  }

  .location-info .city-name {
    font-size: 0.85rem;
  }

  .search-bar {
    margin-top: 0.5rem;
  }
}
</style>
