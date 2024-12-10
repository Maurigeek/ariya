<template>
    <div>
      <!-- Header -->
      <header class="header">
        <button class="close-btn" @click="goBack">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h1 class="header-title">Modifier le profil</h1>
        <div></div>
      </header>
  
      <!-- Photo de profil -->
      <div class="profile-photo">
        <div class="photo-container">
          <img :src="profileImage" alt="Profile" class="profile-image">
          <div class="edit-photo" @click="changePhoto">
            <i class="fas fa-camera"></i>
          </div>
        </div>
      </div>
  
      <!-- Formulaire -->
      <form class="form-container" @submit.prevent="saveChanges">
        <div class="form-section">
          <h2 class="section-title">Informations personnelles</h2>
          <div class="form-group">
            <label class="form-label">Nom complet</label>
            <input
              type="text"
              class="form-input"
              v-model="form.fullName"
              :class="{ 'input-error': errors.fullName }"
            >
            <span class="error-message" v-if="errors.fullName">{{ errors.fullName }}</span>
          </div>
          <div class="form-group">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-input"
              v-model="form.email"
              :class="{ 'input-error': errors.email }"
            >
            <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
          </div>
          <div class="form-group">
            <label class="form-label">Téléphone</label>
            <input
              type="tel"
              class="form-input"
              v-model="form.phone"
            >
          </div>
          <div class="form-group">
            <label class="form-label">Ville</label>
            <input
              type="text"
              class="form-input"
              v-model="form.city"
            >
          </div>
        </div>
  
        <div class="form-section">
          <h2 class="section-title">Préférences</h2>
          <label class="form-label">Centres d'intérêt</label>
          <div class="preferences">
            <div
              v-for="(preference, index) in preferences"
              :key="index"
              class="preference-chip"
              :class="{ selected: form.preferences.includes(preference) }"
              @click="togglePreference(preference)"
            >
              {{ preference }}
            </div>
          </div>
        </div>
  
        <div class="form-section">
          <h2 class="section-title">Langue</h2>
          <div class="language-selector">
            <div
              v-for="language in languages"
              :key="language"
              class="language-option"
              :class="{ selected: form.language === language }"
              @click="selectLanguage(language)"
            >
              <i class="fas fa-check" v-if="form.language === language"></i>
              <span>{{ language }}</span>
            </div>
          </div>
        </div>
  
        <div class="form-section">
          <h2 class="section-title">Notifications</h2>
          <div class="notification-toggle">
            <span>Notifications push</span>
            <label class="toggle-switch">
              <input
                type="checkbox"
                class="toggle-input"
                v-model="form.notifications.push"
              >
              <span class="toggle-slider"></span>
            </label>
          </div>
          <div class="notification-toggle">
            <span>Emails</span>
            <label class="toggle-switch">
              <input
                type="checkbox"
                class="toggle-input"
                v-model="form.notifications.email"
              >
              <span class="toggle-slider"></span>
            </label>
          </div>
        </div>
  
        <div style="height: 80px;"></div>
      </form>
  
      <!-- Bouton Sauvegarder -->
      <div class="save-button">
        <button
          type="submit"
          class="submit-btn"
          :disabled="isSaving"
          @click="saveChanges"
        >
          {{ isSaving ? "Enregistrement..." : "Enregistrer les modifications" }}
        </button>
      </div>
  
      <!-- Message Feedback -->
      <div
        class="feedback-message"
        :class="{ 'show-message': feedbackMessage.show, 'success-message': feedbackMessage.type === 'success', 'error-feedback': feedbackMessage.type === 'error' }"
      >
        {{ feedbackMessage.message }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profileImage: "https://via.placeholder.com/120",
        form: {
          fullName: "John Doe",
          email: "john.doe@example.com",
          phone: "+229 00000000",
          city: "Cotonou",
          preferences: ["Musique", "Tech"],
          language: "Français",
          notifications: {
            push: true,
            email: true,
          },
        },
        preferences: ["Culture", "Musique", "Sport", "Tech", "Art", "Food"],
        languages: ["Français", ""],
        errors: {},
        isSaving: false,
        feedbackMessage: {
          show: false,
          message: "",
          type: "",
        },
      };
    },
    methods: {
      goBack() {
        history.back();
      },
      changePhoto() {
        alert("Changer la photo de profil");
      },
      togglePreference(preference) {
        const index = this.form.preferences.indexOf(preference);
        if (index > -1) {
          this.form.preferences.splice(index, 1);
        } else {
          this.form.preferences.push(preference);
        }
      },
      selectLanguage(language) {
        this.form.language = language;
      },
      validateForm() {
        this.errors = {};
        if (!this.form.fullName.trim()) {
          this.errors.fullName = "Le nom complet est requis.";
        }
        if (!this.form.email.trim() || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(this.form.email)) {
          this.errors.email = "L'email est invalide.";
        }
        return Object.keys(this.errors).length === 0;
      },
      async saveChanges() {
        if (!this.validateForm()) {
          return;
        }
        this.isSaving = true;
        setTimeout(() => {
          this.feedbackMessage = {
            show: true,
            message: "Modifications enregistrées !",
            type: "success",
          };
          this.isSaving = false;
          setTimeout(() => {
            this.feedbackMessage.show = false;
          }, 3000);
        }, 2000);
      },
    },
  };
  </script>
  

  
  <style scoped>
  /* Copiez ici les styles de votre fichier HTML */

  .header {
            background: white;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-title {
            font-size: 1.2rem;
            font-weight: 600;
        }

        .close-btn {
            padding: 0.5rem;
            border: none;
            background: none;
            color: var(--gray);
            cursor: pointer;
        }

        .profile-photo {
            text-align: center;
            padding: 2rem 1rem;
            background: white;
            margin-bottom: 1rem;
        }

        .photo-container {
            position: relative;
            width: 120px;
            height: 120px;
            margin: 0 auto;
        }

        .profile-image {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 4px solid white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            object-fit: cover;
        }

        .edit-photo {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 36px;
            height: 36px;
            background: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            border: 3px solid white;
            cursor: pointer;
        }

        .form-container {
            background: white;
            padding: 1rem;
        }

        .form-section {
            margin-bottom: 1.5rem;
        }

        .section-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: var(--text);
        }

        .form-group {
            margin-bottom: 1rem;
        }

        .form-label {
            display: block;
            margin-bottom: 0.5rem;
            color: var(--gray);
            font-size: 0.9rem;
        }

        .form-input {
            width: 100%;
            padding: 0.8rem;
            border: 1px solid var(--light-gray);
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-input:focus {
            outline: none;
            border-color: var(--primary);
            box-shadow: 0 0 0 2px rgba(255, 107, 53, 0.1);
        }

        .input-error {
            border-color: var(--error);
        }

        .error-message {
            color: var(--error);
            font-size: 0.8rem;
            margin-top: 0.3rem;
        }

        .preferences {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 0.5rem;
        }

        .preference-chip {
            padding: 0.5rem 1rem;
            background: var(--background);
            border-radius: 20px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .preference-chip.selected {
            background: var(--primary);
            color: white;
        }

        .save-button {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1rem;
            background: white;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }

        .submit-btn {
            width: 100%;
            padding: 1rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .submit-btn:disabled {
            background: var(--gray);
            cursor: not-allowed;
        }

        .feedback-message {
            position: fixed;
            top: 1rem;
            left: 50%;
            transform: translateX(-50%);
            padding: 1rem 2rem;
            border-radius: 25px;
            color: white;
            font-weight: 500;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .success-message {
            background: var(--success);
        }

        .error-feedback {
            background: var(--error);
        }

        .show-message {
            opacity: 1;
        }

        .language-selector {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
        }

        .language-option {
            padding: 1rem;
            border: 1px solid var(--light-gray);
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }

        .language-option.selected {
            border-color: var(--primary);
            background: rgba(255, 107, 53, 0.05);
        }

        .notification-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem;
            background: var(--background);
            border-radius: 8px;
            margin-bottom: 0.5rem;
        }

        .toggle-switch {
            position: relative;
            display: inline-block;
            width: 50px;
            height: 24px;
        }

        .toggle-input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: var(--light-gray);
            border-radius: 24px;
            transition: .4s;
        }

        .toggle-slider:before {
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 2px;
            bottom: 2px;
            background-color: white;
            border-radius: 50%;
            transition: .4s;
        }

        .toggle-input:checked + .toggle-slider {
            background-color: var(--primary);
        }

        .toggle-input:checked + .toggle-slider:before {
            transform: translateX(26px);
        }
  
  </style>
  