<template>
    <div>
      <!-- Header -->
      <header class="header">
        <div class="header-left">
          <button class="back-button" @click="goBack">
            <i class="fas fa-arrow-left"></i>
          </button>
          <div>
            <h1 class="header-title">Modification du Profil de l'Organisateur</h1>
          </div>
        </div>
      </header>
  
      <!-- Formulaire de modification -->
      <div class="form-section">
        <h2 class="section-title">Modifier les informations</h2>
  
        <!-- Nom de l'organisation -->
        <div class="form-group">
          <label class="form-label">Nom de l'organisation</label>
          <input v-model="organizer.name" type="text" class="form-input" placeholder="Nom de l'organisation" />
        </div>
  
        <!-- Logo de l'organisation -->
        <div class="form-group">
          <label class="form-label">Logo</label>
          <input type="file" class="form-input" @change="handleLogoChange" />
          <img v-if="organizer.logoPreview" :src="organizer.logoPreview" alt="Logo" class="logo-preview" />
        </div>
  
        <!-- Description -->
        <div class="form-group">
          <label class="form-label">Description</label>
          <textarea v-model="organizer.description" class="form-input" rows="4" placeholder="Décrivez l'organisation..."></textarea>
        </div>
  
        <!-- Site Web -->
        <div class="form-group">
          <label class="form-label">Site Web (optionnel)</label>
          <input v-model="organizer.website" type="url" class="form-input" placeholder="https://votresite.com" />
        </div>
  
        <!-- Fonction -->
        <div class="form-group">
          <label class="form-label">Fonction</label>
          <input v-model="organizer.function" type="text" class="form-input" placeholder="Ex: Organisateur Principal" />
        </div>
  
        <!-- Lieu -->
        <div class="form-group">
          <label class="form-label">Lieu</label>
          <input v-model="organizer.location" type="text" class="form-input" placeholder="Lieu de l'organisation" />
        </div>
  
        <!-- Pays -->
        <div class="form-group">
          <label class="form-label">Pays</label>
          <input v-model="organizer.country" type="text" class="form-input" placeholder="Pays" />
        </div>
  
        <!-- Boutons de sauvegarde -->
        <div class="bottom-bar">
          <button @click="saveOrganizer" class="action-button publish-button">Sauvegarder les modifications</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        organizer: {
          name: "",
          logo: null,
          logoPreview: "",
          description: "",
          website: "",
          function: "",
          location: "",
          country: ""
        }
      };
    },
    methods: {
      goBack() {
        window.history.length > 1 ? history.back() : this.$router.push('/');
      },
      handleLogoChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.organizer.logoPreview = e.target.result;
            this.organizer.logo = file;
          };
          reader.readAsDataURL(file);
        }
      },
      saveOrganizer() {
        console.log("Organisateur sauvegardé :", this.organizer);
        alert("Profil modifié avec succès !");
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles combinés des étapes et formulaire */
  .header {
    background: white;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
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
  
  .form-section {
    padding: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--gray);
  }
  
  .form-input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid var(--light-gray);
    border-radius: 8px;
  }
  
  .logo-preview {
    margin-top: 10px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 10px;
  }
  
  .bottom-bar {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
  
  .action-button {
    background-color: var(--primary);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  