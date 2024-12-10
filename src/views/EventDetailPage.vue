<template>
    <div class="event-container">
      <!-- En-tête de l'événement -->
      <div class="event-header">
        <img src="https://via.placeholder.com/300" alt="Event cover">
        <div class="header-buttons">
          <button class="header-button" @click="goBack">
            <i class="fas fa-arrow-left"></i>
          </button>
          <button class="header-button" @click="toggleLike">
            <i :class="['fas', liked ? 'fa-heart' : 'fa-heart-broken']"></i>
          </button>
        </div>
      </div>
  
      <!-- Détails de l'événement -->
      <div class="event-details">
        <span class="price-tag">150 F CFA</span>
        <h1 class="event-title">RDV Abonnés</h1>
  
        <div class="event-info">
          <div class="info-item">
            <i class="fa fa-calendar"></i>
            <span>Samedi, 9 Décembre 2023 • 14:58</span>
          </div>
          <div class="info-item">
            <i class="fa fa-map-marker-alt"></i>
            <span>Lomé, Togo</span>
          </div>
        </div>
  
        <!-- Description -->
        <div class="description">
          <h3>Description</h3>
          <p>Une simple description de l'événement...</p>
        </div>
  
        <!-- Tags -->
        <div class="tags-section">
          <h3>Tags</h3>
          <div class="tags">
            <span class="tag">Conférences</span>
            <span class="tag">Networking</span>
            <span class="tag">Entrepreneuriat</span>
          </div>
        </div>
  
        <!-- Organisateur -->
        <div class="organizer">
          <img src="https://via.placeholder.com/60x60" alt="Organizer" class="organizer-avatar">
          <div class="organizer-info">
            <div class="organizer-name">Développeur</div>
            <div class="organizer-role">Organisateur</div>
          </div>
          <button class="follow-button" @click="toggleFollow">
            {{ followText }}
          </button>
        </div>
      </div>
  
      <!-- Barre inférieure -->
      <div class="bottom-bar">
        <button class="ticket-button">Réserver mon ticket</button>
        <button class="share-button">
          <i class="fas fa-share-alt"></i>
        </button>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        followText: 'Suivre',
      };
    },
    methods: {
      goBack() {
        window.history.back();
      },
      toggleFollow() {
        this.followText = this.followText === 'Suivre' ? 'Suivi' : 'Suivre';
      },
      toggleLike() {
        console.log('Bouton "like" cliqué');
      }
    }
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
    background-color: var(--secondary);
    color: white;
    padding: 5px 10px;
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
  