<template>
  <div>
    <div class="container-fluid p-3">
      <div class="row">
        <!-- Boucle à travers les destinations touristiques -->
        <div
          v-for="(destination, index) in destinations"
          :key="index"
          class="col-md-3 mb-4"
        >
          <div class="event-card">
            <img :src="destination.image" alt="Destination" class="event-image" />
            <div class="event-content">
              <h2 class="event-title">{{ destination.name }}</h2>
              <div class="event-date">
                <i class="far fa-calendar"></i>
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
              <a class="ticket-button text-center" :href="destination.link">En savoir plus</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TourismList",
  data() {
    return {
      destinations: [], // Tableau des destinations touristiques initialisé à vide
    };
  },
  methods: {
    async fetchDestinations() {
      try {
        // Appel à une API fictive pour récupérer des données touristiques
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.destinations = response.data.slice(0, 20).map((item) => ({
          name: item.title, // Utilise le titre pour le nom de la destination
          location: "Lieu fictif", // Lieu générique
          tags: ["Tourisme", "Découverte"], // Tags pour le tourisme
          image: `https://via.placeholder.com/300?text=Destination+${item.id}`, // Image aléatoire
          link: `/tourism/${item.id}`, // Lien vers une page détaillée fictive
        }));
      } catch (error) {
        console.error("Erreur lors de la récupération des destinations :", error);
      }
    },
  },
  mounted() {
    this.fetchDestinations(); // Récupère les destinations au montage du composant
  },
};
</script>

<style scoped>

</style>
