<template>
    <div>
      <!-- Header -->
      <header class="header">
        <div class="header-left">
          <button class="back-button" @click="goBack">
            <i class="fas fa-arrow-left"></i>
          </button>
          <div>
            <h1 class="header-title">Création de l'organisateur</h1>
            <div class="progress-text">Étape {{ activeStep }} sur 3</div>

          </div>
        </div>
      </header>
  
      <!-- Barre d'étapes -->
      <div class="step-bar">
        <div class="step" :class="{ active: activeStep >= 1 }"></div>
        <div class="step" :class="{ active: activeStep >= 2 }"></div>
        <div class="step" :class="{ active: activeStep >= 3 }"></div>
      </div>
  
      <!-- Étape 1 : Informations sur l'organisateur -->
      <div v-if="activeStep === 1">
        <div class="form-section">
          <h2 class="section-title">Informations sur l'organisation</h2>
          
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
        </div>
      </div>
  
      <!-- Étape 2 : Informations complémentaires -->
      <div v-if="activeStep === 2">
        <div class="form-section">
          <h2 class="section-title">Informations complémentaires</h2>
          
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
        </div>
      </div>
  
      <!-- Étape 3 : Confirmation -->
      <div v-if="activeStep === 3">
        <div class="form-section">
          <h2 class="section-title">Confirmer les informations</h2>
          <div class="summary">
            <p><strong>Nom :</strong> {{ organizer.name }}</p>
            <p><strong>Description :</strong> {{ organizer.description }}</p>
            <p><strong>Site Web :</strong> {{ organizer.website || 'Non renseigné' }}</p>
            <p><strong>Fonction :</strong> {{ organizer.function }}</p>
            <p><strong>Lieu :</strong> {{ organizer.location }}</p>
            <p><strong>Pays :</strong> {{ organizer.country }}</p>
          </div>
        </div>
      </div>
  
      <!-- Boutons de navigation -->
      <div class="bottom-bar">
        <button v-if="activeStep > 1" @click="goToPreviousStep" class="action-button save-draft">Retour</button>
        <button v-if="activeStep < 3" @click="goToNextStep" class="action-button continue">Suivant</button>
        <button v-if="activeStep === 3" @click="saveOrganizer" class="action-button publish-button">Publier</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeStep: 1,
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
      goToPreviousStep() {
        if (this.activeStep > 1) this.activeStep--;
      },
      goToNextStep() {
        if (this.activeStep < 3) this.activeStep++;
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
        alert("Organisateur publié avec succès !");
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

        .progress-text {
            font-size: 0.9rem;
            color: var(--gray);
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
  }
  
  .step.active {
    background: var(--primary);
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
    justify-content: space-between;
    padding: 1rem;
  }
  
  .action-button {
    background-color: var(--primary);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .summary {
    background: #f9f9f9;
    padding: 1rem;
    border-radius: 8px;
  }
  </style>
  