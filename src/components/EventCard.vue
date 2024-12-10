<template>
  <div>
    <div class="container-fluid p-3">
      <div class="row">
        <!-- Boucle à travers les événements -->
        <div
          v-for="(event, index) in events"
          :key="index"
          class="col-md-3 mb-4"
        >
          <div class="event-card">
            <img :src="event.image" alt="Event" class="event-image" />
            <div class="event-content">
              <h2 class="event-title">{{ event.title }}</h2>
              <div class="event-date">
                <i class="far fa-calendar"></i>
                {{ event.date }}
              </div>
              <div class="tag-container">
                <span
                  v-for="(tag, tagIndex) in event.tags"
                  :key="tagIndex"
                  class="tag"
                >
                  {{ tag }}
                </span>
              </div>
              <a class="ticket-button text-center" :href="event.link">Réserver mon ticket</a>
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
  name: "EventList",
  data() {
    return {
      events: [], // Tableau des événements initialisé à vide
    };
  },
  methods: {
    async fetchEvents() {
      try {
        // Appel de l'API JSONPlaceholder
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        this.events = response.data.slice(0, 20).map((item) => ({
          title: item.title, // Utilise le titre fourni par l'API
          date: this.generateRandomDate(), // Génère une date aléatoire
          tags: ["Général", "Événement"], // Exemple de tags fixes
          image: `https://via.placeholder.com/300?text=${item.id}`, // Image aléatoire
          link: `/details/${item.id}`, // Lien vers un détail fictif
        }));
      } catch (error) {
        console.error("Erreur lors de la récupération des événements :", error);
      }
    },
    generateRandomDate() {
      // Génère une date future aléatoire pour simuler un événement
      const start = new Date();
      const end = new Date(start.getFullYear(), start.getMonth() + 1, start.getDate());
      const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      return randomDate.toLocaleString("fr-FR", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  mounted() {
    this.fetchEvents(); // Récupère les événements au montage du composant
  },
};
</script>

<style scoped>

</style>
