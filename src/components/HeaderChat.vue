<template>
    <header class="header">
      <div class="header-top">
        <button class="back-btn" @click="goBack">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h1>Messages</h1>
        <i class="fas fa-filter"></i>
      </div>
      <div class="search-box">
        <i class="fas fa-search search-icon"></i>
        <input type="text" class="search-input" placeholder="Rechercher une conversation..." v-model="searchQuery" @input="searchConversations">
      </div>
      <div class="chat-tabs">
        <div 
          v-for="tab in tabs" 
          :key="tab" 
          :class="['tab', { active: activeTab === tab }]" 
          @click="setActiveTab(tab)"
        >
          {{ tab }}
        </div>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tabs: ['Tous', 'Événements', 'Covoiturage', 'Support', 'Organisateurs'],
        activeTab: 'Tous',
        searchQuery: ''
      };
    },
    methods: {
      setActiveTab(tab) {
        this.activeTab = tab;
        // Logique pour filtrer les conversations par onglet
      },
      searchConversations() {
        console.log('Recherche:', this.searchQuery);
        // Logique pour la recherche
      },
      goBack() {
        window.history.back();
      }
    }
  };
  </script>
  
  <style scoped>
  /* Copiez les styles pertinents ici */
  </style>
  