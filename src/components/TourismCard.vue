<template>
  <div>
    <div class="container-fluid p-3">
      <div class="row">
        <div
          v-for="(destination, index) in destinations"
          :key="index"
          class="col-md-3 mb-4"
        >
          <div class="event-card">
            <div class="image-container">
              <img :src="destination.gallery[0]" alt="Image de la destination" class="responsive-image" />
            </div>
            <div class="event-content">
              <h2 class="event-title">{{ destination.name }}</h2>
              <div class="event-date">
                <i class="fas fa-map-marker-alt"></i>
                {{ destination.location }}
              </div>
              <div class="tag-container">
                <span
                  v-for="(tag, tagIndex) in destination.tags"
                  :key="tagIndex"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
              <router-link
                class="ticket-button text-center"
                :to="{ name: 'TourismDetail', params: { id: destination.id } }"
              >
                En savoir plus
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fallbackDestinations from "@/data/fallbackDestinations";

export default {
  name: "TourismList",
  data() {
    return {
      destinations: fallbackDestinations, // Utilisation des données importées
    };
  },
};
</script>

<style scoped>
/* Style pour la carte de destination touristique */
.event-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
}

.event-card:hover {
  transform: translateY(-5px);
}

.image-container {
  width: 100%;
  height: 200px; /* Hauteur fixe pour toutes les images */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.responsive-image {
  width: 100%;
  height: auto;
  object-fit: cover; /* Les images remplissent l'espace de manière uniforme */
}

.event-content {
  padding: 1rem;
}

.event-title {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.event-date {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.tag-container {
  margin-bottom: 1rem;
}

.tag {
  background-color: #f0f0f0;
  color: #333;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-right: 0.5rem;
  font-size: 0.8rem;
}

.ticket-button {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease-in-out;
}

.ticket-button:hover {
  background-color: #0056b3;
}
</style>
