<template>
    <div id="app">
    <!-- Header -->
    <header class="header">
      <div class="header-left">
        <button class="back-button" @click="goBack">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h1 class="header-title">Liste des événements</h1>
      </div>
    </header>
      <EventCard />
      <FloatingChat />
       <!-- Organizers List -->

    </div>
  </template>
  
  <script>
  import Header from '../components/Header.vue';
  import TypeSwitcher from '../components/TypeSwitcher.vue';
  import Categories from '../components/Categories.vue';
  import EventCard from '../components/EventCard.vue';
  import FloatingChat from '../components/FloatingChat.vue';
  import BottomNav from '../components/BottomNav.vue';
  
  export default {
    components: {
      Header,
      TypeSwitcher,
      Categories,
      EventCard,
      FloatingChat,
      BottomNav
    },
    data() {
      return {
        activeType: 'events',
      };
    },
  
    methods: {
      updateActiveType(type) {
        this.activeType = type;
      },
      goBack() {
        window.history.length > 1 ? history.back() : this.$router.push('/');
      },
    }
  }
  </script>
  
  <style>
  
  @import '../assets/style.css';

/* Header Styles */
.app-header {
    background: white;
    padding: 1rem;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 15px rgba(0,0,0,0.05);
}

.top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.location-info {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.city-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text);
}

.user-actions {
    display: flex;
    gap: 1rem;
}

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
    font-size: 0.9rem;
}

.search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: var(--gray);
}

/* Type Switcher */
.type-switcher {
    display: flex;
    padding: 1rem;
    gap: 1rem;
    background: white;
}

.type-option {
    flex: 1;
    padding: 0.8rem;
    text-align: center;
    border-radius: 10px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    color: var(--gray);
}

.type-option.active {
    background: var(--primary);
    color: white;
    box-shadow: 0 4px 15px rgba(255, 107, 53, 0.2);
}

/* Categories */
.categories-container {
    overflow: hidden;
    background: white;
    margin-bottom: 1rem;
}

.categories {
    display: flex;
    overflow-x: auto;
    padding: 1rem;
    gap: 1rem;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.categories::-webkit-scrollbar {
    display: none;
}

.category-chip {
    padding: 0.6rem 1.2rem;
    background: var(--background);
    border-radius: 20px;
    white-space: nowrap;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--gray);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.category-chip.active {
    background: var(--secondary);
    color: white;
}

/* Content Section */
.content-section {
    padding: 1rem;
}

.section-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--text);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.section-title .view-all {
    font-size: 0.9rem;
    color: var(--primary);
}

/* Cards */
.card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 1rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card-content {
    padding: 1rem;
}

.card-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.card-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--gray);
    font-size: 0.9rem;
}

.card-badge {
    padding: 0.3rem 0.8rem;
    background: var(--primary);
    color: white;
    border-radius: 15px;
    font-size: 0.8rem;
}

/* Navigation */
.bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    display: flex;
    justify-content: space-around;
    padding: 0.8rem;
    box-shadow: 0 -2px 15px rgba(0,0,0,0.05);
}

.nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    color: var(--gray);
    text-decoration: none;
    font-size: 0.8rem;
}

.nav-item.active {
    color: var(--primary);
}

/* Chat Button */
.floating-chat {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: var(--secondary);
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    box-shadow: 0 4px 15px rgba(46, 196, 182, 0.3);
    z-index: 1000;
}



.header {
    background: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.header-left {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.back-button {
    border: none;
    background: none;
    font-size: 1.2rem;
    color: var(--text);
}

.header-title {
    font-size: 1.2rem;
    font-weight: 600;
}

.step-bar {
    display: flex;
    padding: 1rem;
    background: white;
    gap: 0.5rem;
}

.step {
    flex: 1;
    height: 4px;
    background: var(--light-gray);
    border-radius: 2px;
    position: relative;
}

.step.active {
    background: var(--primary);
}

.form-section {
    background: white;
    margin: 1rem;
    border-radius: 12px;
    overflow: hidden;
}

.section-header {
    padding: 1rem;
    border-bottom: 1px solid var(--light-gray);
}

.section-title {
    font-weight: 600;
    color: var(--text);
}

.form-group {
    padding: 1rem;
    border-bottom: 1px solid var(--light-gray);
}

.form-label {
    font-size: 0.9rem;
    color: var(--gray);
    margin-bottom: 0.5rem;
    display: block;
}

.form-input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid var(--light-gray);
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-input:focus {
    outline: none;
    border-color: var(--primary);
}

.image-upload {
    position: relative;
    height: 200px;
    background: var(--background);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    color: var(--gray);
    cursor: pointer;
}

.image-upload i {
    font-size: 2rem;
}

.upload-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}

.tags-input {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.5rem;
    border: 1px solid var(--light-gray);
    border-radius: 8px;
    min-height: 100px;
}

.tag {
    padding: 0.5rem 1rem;
    background: var(--background);
    border-radius: 20px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.tag i {
    cursor: pointer;
    color: var(--gray);
}

.tag i:hover {
    color: var(--danger);
}

.date-time-picker {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
}

.location-input {
    position: relative;
}

.location-suggestions {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border: 1px solid var(--light-gray);
    border-radius: 8px;
    margin-top: 0.5rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    z-index: 10;
}

.location-suggestion {
    padding: 0.8rem;
    border-bottom: 1px solid var(--light-gray);
    cursor: pointer;
}

.location-suggestion:last-child {
    border-bottom: none;
}

.location-suggestion:hover {
    background: var(--background);
}

.bottom-bar {
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

.action-button {
    flex: 1;
    padding: 1rem;
    border-radius: 25px;
    border: none;
    font-weight: 600;
    cursor: pointer;
}

.save-draft {
    background: var(--background);
    color: var(--text);
}

.continue {
    background: var(--primary);
    color: white;
}

.category-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    padding: 1rem;
}

.category-item {
    padding: 1rem;
    border: 1px solid var(--light-gray);
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
}

.category-item.selected {
    background: rgba(255, 107, 53, 0.1);
    border-color: var(--primary);
    color: var(--primary);
}

.category-item i {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    display: block;
}

.error-message {
    color: var(--danger);
    font-size: 0.9rem;
    margin-top: 0.5rem;
}


/* Tab Bar Styles */
.tab-bar {
    display: flex;
    gap: 2rem;
    margin-bottom: 1.5rem;
    justify-content: center;
  }
  
  .tab {
    font-size: 1.1rem;
    color: var(--text);
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  .tab.active {
    color: var(--primary);
    font-weight: bold;
  }
  
  .tab:hover {
    color: var(--primary);
  }
  
  /* Event Card Styles */
  .event-card {
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    height: 100%; /* Assure que chaque carte a la même hauteur */
  }
  
  .event-card:hover {
    transform: translateY(-5px);
  }
  
  .event-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .event-content {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1; /* Assure que le contenu prend toute la hauteur disponible */
  }
  
  .event-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--text);
    margin-bottom: 0.5rem;
  }
  
  .event-date {
    font-size: 1rem;
    color: var(--gray);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .tag-container {
    display: flex;
    gap: 0.8rem;
    margin-bottom: 1rem;
  }
  
  .tag {
    font-size: 0.9rem;
    background: var(--secondary);
    color: white;
    padding: 0.3rem 0.6rem;
    border-radius: 12px;
  }
  
  .ticket-button {
    background: var(--primary);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    transition: background 0.3s ease;
    margin-top: auto; /* Place le bouton à la fin de la carte */
  }
  
  .ticket-button:hover {
    background: var(--accent);
  }
  
  /* Container Styles */
  .container {
    padding: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap; /* Permet aux cartes de se répartir sur plusieurs lignes si nécessaire */
  }
  
  /* Mobile Responsiveness */
  @media (max-width: 768px) {
    .event-card {
      flex-direction: column;
    }
  
    .event-image {
      width: 100%;
      height: auto;
    }
  
    .event-content {
      width: 100%;
    }
  }
  

  /* Organizers Section */
.organizers-section {
  padding: 1rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.organizer-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.organizer-image {
  width: 60px; /* Ajuste la taille de l'image */
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--primary); /* Bordure avec couleur primaire */
}

.organizer-details {
  font-size: 1rem;
  color: var(--text);
}

/* Optional: Add hover effect */
.list-group-item:hover {
  background: rgba(0, 0, 0, 0.05);
  transition: background 0.3s ease;
}

  </style>
  