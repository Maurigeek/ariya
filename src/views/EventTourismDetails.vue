

<template>
  <div>
    <div class="header-section">
      <img :src="galleryImages[currentImageIndex]" alt="Destination" class="header-image" />
      <div class="top-actions">
        <button class="action-button" @click="goBack">
          <i class="fas fa-arrow-left"></i>
        </button>
        <button class="action-button" @click="toggleFavorite">
          <i :class="isFavorite ? 'fas fa-heart' : 'far fa-heart'"></i>
        </button>
      </div>
      <div class="header-overlay">
        <div class="image-gallery">
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            :class="['gallery-dot', { active: currentImageIndex === index }]"
            @click="currentImageIndex = index"
          ></div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <div class="title-row">
        <h1 class="main-title">{{ destination.name }}</h1>
      </div>

      <div class="info-row">
        <div class="info-item">
          <i class="fas fa-map-marker-alt"></i>
          <span>{{ destination.location }}</span>
        </div>
      </div>

      <div class="tag-container">
        <span class="tag" v-for="(tag, index) in destination.tags" :key="index">
          {{ tag }}
        </span>
      </div>

      <!-- Tabs -->
      <div class="details-tabs">
        <div
          v-for="tab in tabs"
          :key="tab"
          :class="['tab', { active: activeTab === tab }]"
          @click="activeTab = tab"
        >
          {{ tab }}
        </div>
      </div>

      <!-- Tab Content -->
      <div v-if="activeTab === 'Détails'" class="description">
        <h2 class="section-title">À propos</h2>
        <p>{{ destination.description }}</p>
      </div>
      <div v-else-if="activeTab === 'Avis'" class="ratings-section">
        <h2 class="section-title">Avis ({{ destination.reviews.length }})</h2>
        <div
          v-for="(review, index) in destination.reviews"
          :key="index"
          class="review"
        >
          <div class="review-header">
            <span class="review-author">{{ review.author }}</span>
            <span class="review-date">{{ review.date }}</span>
          </div>
          <p>{{ review.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import feedData from "@/data/fallbackDestinations";

export default {
  props: ["id"],
  data() {
    return {
      isFavorite: false,
      destination: {}, // Stocke les détails de la destination
      galleryImages: [], // Stocke les images de la galerie
      currentImageIndex: 0, // Index de l'image actuelle
      tabs: ["Détails", "Avis"], // Onglets pour la navigation
      activeTab: "Détails", // Onglet actif par défaut
    };
  },
  methods: {
    fetchDestinationDetails() {
      const destination = feedData.find((dest) => dest.id === parseInt(this.id));
      if (destination) {
        this.destination = destination;
        this.galleryImages = destination.gallery; // Charge les images de la galerie
      } else {
        console.error("Destination introuvable");
        this.destination = {
          name: "Destination introuvable",
          location: "Inconnu",
          tags: [],
          description: "Les détails de cette destination ne sont pas disponibles.",
          gallery: ["https://via.placeholder.com/300"],
          reviews: [],
        };
        this.galleryImages = this.destination.gallery;
      }
    },
    goBack() {
      window.history.back();
    },
    toggleFavorite() {
      this.isFavorite = !this.isFavorite;
    },
  },
  mounted() {
    this.fetchDestinationDetails();
  },
};
</script>


  <style scoped>


        /* Header Image Section */
        .header-section {
            position: relative;
            height: 300px;
            background: black;
        }

        .header-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 0.9;
        }

        .header-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 1.5rem;
            color: white;
        }

        .top-actions {
            position: absolute;
            top: 1rem;
            left: 1rem;
            right: 1rem;
            display: flex;
            justify-content: space-between;
            z-index: 10;
        }

        .action-button {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            background: rgba(255,255,255,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text);
            border: none;
            cursor: pointer;
        }

        .image-gallery {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            display: flex;
            gap: 0.5rem;
        }

        .gallery-dot {
            width: 8px;
            height: 8px;
            border-radius: 4px;
            background: rgba(255,255,255,0.5);
        }

        .gallery-dot.active {
            background: white;
            width: 20px;
        }

        /* Content Section */
        .content-section {
            padding: 1.5rem;
        }

        .title-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 1rem;
        }

        .main-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text);
            flex: 1;
            margin-right: 1rem;
        }

        .price-tag {
            padding: 0.5rem 1rem;
            background: var(--primary);
            color: white;
            border-radius: 20px;
            font-weight: 600;
        }

        .info-row {
            display: flex;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
            color: var(--gray);
            font-size: 0.9rem;
        }

        .info-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .tag-container {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
            margin-bottom: 1.5rem;
        }

        .tag {
            padding: 0.5rem 1rem;
            background: var(--background);
            border-radius: 20px;
            font-size: 0.9rem;
            color: var(--primary);
        }

        .section-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text);
        }

        .description {
            color: var(--text);
            line-height: 1.6;
            margin-bottom: 2rem;
        }

        .organizer-card {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            background: var(--background);
            border-radius: 12px;
            margin-bottom: 1.5rem;
        }

        .organizer-image {
            width: 50px;
            height: 50px;
            border-radius: 25px;
            object-fit: cover;
        }

        .organizer-info {
            flex: 1;
        }

        .organizer-name {
            font-weight: 600;
            color: var(--text);
        }

        .organizer-role {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .map-container {
            height: 200px;
            background: var(--background);
            border-radius: 12px;
            margin-bottom: 1.5rem;
            overflow: hidden;
        }

        .details-tabs {
            display: flex;
            gap: 1rem;
            border-bottom: 1px solid var(--background);
            margin-bottom: 1rem;
        }

        .tab {
            padding: 1rem;
            color: var(--gray);
            cursor: pointer;
            position: relative;
        }

        .tab.active {
            color: var(--primary);
        }

        .tab.active::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--primary);
        }

        .action-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            padding: 1rem;
            display: flex;
            gap: 1rem;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }

        .share-button {
            width: 50px;
            height: 50px;
            border-radius: 25px;
            border: 1px solid var(--gray);
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text);
        }

        .book-button {
            flex: 1;
            padding: 1rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
        }

        .ratings-section {
            margin-bottom: 1.5rem;
        }

        .rating-stars {
            display: flex;
            gap: 0.5rem;
            color: #FFD700;
            margin-bottom: 0.5rem;
        }

        .review {
            background: var(--background);
            padding: 1rem;
            border-radius: 12px;
            margin-bottom: 1rem;
        }

        .review-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }

        .review-author {
            font-weight: 600;
        }

        .review-date {
            color: var(--gray);
            font-size: 0.9rem;
        }
  </style>
  