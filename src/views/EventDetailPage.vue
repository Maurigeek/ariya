<template>
  <div class="event-container">
    <!-- En-tête de l'événement -->
    <div class="event-header">
      <img :src="event.image" :alt="event.title" />
      <div class="header-buttons">
        <button class="header-button" @click="goBack">
          <i class="fas fa-arrow-left"></i>
        </button>
        <button class="header-button" @click="toggleLike">
          <i :class="['fas', liked ? 'fa-heart' : 'fa-heart']"></i>
        </button>
      </div>
    </div>

    <!-- Détails de l'événement -->
    <div class="event-details">
      <span class="price-tag">150 F CFA</span>
      <h1 class="event-title">{{ event.title }}</h1>

      <div class="event-info">
        <div class="info-item">
          <i class="fa fa-calendar"></i>
          <span>{{ event.date }}</span>
        </div>
        <div class="info-item">
          <i class="fa fa-map-marker-alt"></i>
          <span>Bénin</span>
        </div>
      </div>

      <!-- Description -->
      <div class="description">
        <h3>Description</h3>
        <p>{{ event.description }}</p>
      </div>

      <!-- Tags -->
      <div class="tags-section" v-if="event.tags.length">
        <h3>Tags</h3>
        <div class="tags">
          <span v-for="tag in event.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>

      <!-- Organisateur -->
      <div class="organizer">
        <img :src="event.organizer.avatar" alt="Organizer" class="organizer-avatar" />
        <div class="organizer-info">
          <div class="organizer-name">{{ event.organizer.name }}</div>
          <div class="organizer-role">{{ event.organizer.role }}</div>
        </div>
        <button class="follow-button" @click="toggleFollow">
          {{ followText }}
        </button>
      </div>
    </div>

    <!-- Barre inférieure -->
    <div class="bottom-bar">
      <button class="ticket-button" @click="goToPayment">Réserver mon ticket</button>
      <button class="share-button">
        <i class="fas fa-share-alt"></i>
      </button>
    </div>
  </div>
</template>


<script>
import image01 from "@/assets/images/event1.jpeg";
import image02 from "@/assets/images/event2.jpeg";
import image03 from "@/assets/images/event3.jpeg";


const fallbackEvents = [
  {
    id: 1,
    title: "Festival de Ouidah",
    date: "Samedi, 16 Décembre 2023 à 14:00",
    description: "Un événement culturel unique célébrant la diversité au Bénin.",
    image: image01,
    tags: ["Culture", "Musique"],
    organizer: {
      name: "Groupe Ariya",
      role: "Organisateur Principal",
      avatar: "https://via.placeholder.com/60x60?text=GA",
    },
  },
  {
    id: 2,
    title: "Marché des Arts Africains",
    date: "Dimanche, 17 Décembre 2023 à 10:00",
    description: "Explorez les œuvres d'artistes talentueux du Bénin.",
    image: image02,
    tags: ["Art", "Marché"],
    organizer: {
      name: "Groupe Ariya",
      role: "Organisateur Principal",
      avatar: "https://via.placeholder.com/60x60?text=GA",
    },
  },
  {
    id: 3,
    title: "Conférence Tech Cotonou",
    date: "Lundi, 18 Décembre 2023 à 09:00",
    description: "Une conférence réunissant les meilleurs experts technologiques.",
    image: image03,
    tags: ["Technologie", "Conférence"],
    organizer: {
      name: "Groupe Ariya",
      role: "Organisateur Principal",
      avatar: "https://via.placeholder.com/60x60?text=GA",
    },
  },
];

export default {
  props: ["id"],
  data() {
    return {
      event: {
        title: "",
        date: "",
        description: "",
        image: "",
        tags: [],
        organizer: {
          name: "",
          role: "",
          avatar: "",
        },
      },
      liked: false,
      followText: "Suivre",
    };
  },
  methods: {
    goToPayment() {
      // Si vous utilisez Vue Router
      this.$router.push("/payment");
    },
    fetchEventDetails() {
      console.log("ID reçu :", this.id);
      const event = fallbackEvents.find((e) => e.id === parseInt(this.id));
      if (event) {
        console.log("Événement trouvé :", event);
        this.event = event;
      } else {
        console.error("Événement introuvable !");
      }
    },
    goBack() {
      window.history.back();
    },
    toggleFollow() {
      this.followText = this.followText === "Suivre" ? "Suivi" : "Suivre";
    },
    toggleLike() {
      this.liked = !this.liked;
    },
  },
  mounted() {
    this.fetchEventDetails();
  },
};
</script>


<style scoped>
  /* Global Styles */
  @import '../assets/style.css';
  /* Event Header */
  .event-header {
    position: relative;
    width: 100%;
    height: 200px;
  }
  
  .event-header img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .header-buttons {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    gap: 10px;
  }
  
  .header-button {
    background-color: rgba(0, 0, 0, 0.4);
    border: none;
    padding: 10px;
    cursor: pointer;
    color: white;
    border-radius: 5px;
  }
  
  .header-button:hover {
    background-color: var(--primary);
  }
  
  /* Event Details */
  .event-details {
    padding: 20px;
  }
  
  .price-tag {
    font-size: 1.5em;
    font-weight: bold;
    color: var(--primary);
  }
  
  .event-title {
    font-size: 2em;
    margin: 15px 0;
    color: var(--text);
  }
  
  .event-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  
  .info-item {
    display: flex;
    gap: 5px;
    color: var(--gray);
  }
  
  .description {
    margin-top: 20px;
  }
  
  .description h3 {
    font-size: 1.2em;
    color: var(--text);
  }
  
  .description p {
    margin-top: 10px;
    color: var(--gray);
  }
  
  .tags-section {
    margin-top: 20px;
  }
  
  .tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  .tag {
    background-color:#f0f0f0    ;
    padding: 5px 10px;
    color: gray;
    border-radius: 20px;
  }
  
  .organizer {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  
  .organizer-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .organizer-info {
    margin-left: 10px;
  }
  
  .organizer-name {
    font-weight: bold;
  }
  
  .organizer-role {
    color: var(--gray);
  }
  
  .follow-button {
    background-color: var(--primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin-left: auto;
    cursor: pointer;
  }
  
  .follow-button:hover {
    background-color: var(--accent);
  }
  
  /* Bottom Bar */
  .bottom-bar {
    display: flex;
    justify-content: space-between;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    padding: 10px 20px;
    box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .ticket-button,
  .share-button {
    background-color: var(--primary);
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .ticket-button:hover,
  .share-button:hover {
    background-color: var(--accent);
  }
  </style>
  