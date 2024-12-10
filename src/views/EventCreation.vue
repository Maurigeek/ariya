<template>
  <div>
    <!-- Header -->
    <header class="header">
      <div class="header-left">
        <button class="back-button" @click="goBack">
          <i class="fas fa-arrow-left"></i>
        </button>
        <div>
          <h1 class="header-title">{{ stepTitles[activeStep - 1] }}</h1>
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
    <div v-if="activeStep === 1">
    <!-- Étape 1 : Créer un événement -->
    <div class="form-section">
      <h2 class="section-title">Informations de base</h2>
      <div class="form-group">
        <label class="form-label">Titre de l'événement</label>
        <input v-model="event.title" type="text" class="form-input" placeholder="Ex: Festival des Arts et de la Culture" />
      </div>
      <div class="form-group">
        <label class="form-label">Description</label>
        <textarea v-model="event.description" class="form-input" rows="4" placeholder="Décrivez votre événement..."></textarea>
      </div>
      <div class="form-group">
        <label class="form-label">Date et lieu</label>
        <div class="date-time-picker">
          <input v-model="event.date" type="date" class="form-input" />
          <input v-model="event.time" type="time" class="form-input" />
        </div>
        <input v-model="event.location" type="text" class="form-input" placeholder="Lieu" />
      </div>
      <div class="form-group">
        <label class="form-label">Sélectionnez un lieu sur la carte</label>
        <div id="map" class="map-container"></div>
        <p class="selected-location">
          <strong>Adresse : </strong> {{ event.address }}
        </p>
      </div>
    </div>
  </div>

    <div v-if="activeStep === 2">
      <!-- Étape 2 : Configuration des billets -->
      <div class="form-section">
        <h2 class="section-title">Types de billets</h2>
        <div v-for="(ticket, index) in tickets" :key="index" class="ticket-type">
          <h3>{{ ticket.name }}</h3>
          <div class="form-group">
            <label class="form-label">Description</label>
            <input v-model="ticket.description" type="text" class="form-input" />
          </div>
          <div class="row">
            <div class="col">
              <label class="form-label">Prix</label>
              <input v-model.number="ticket.price" type="number" class="form-input" />
            </div>
            <div class="col">
              <label class="form-label">Quantité</label>
              <input v-model.number="ticket.quantity" type="number" class="form-input" />
            </div>
          </div>
        </div>
        <button class="add-button btn btn-light p-3 text-dark" @click="addTicketType">
          <i class="fas fa-plus"></i> Ajouter un type
        </button>
      </div>
    </div>

    <div v-if="activeStep === 3">
      <!-- Étape 3 : Promotion -->
      <div class="form-section">
        <h2 class="section-title">Partager l'événement</h2>
        <div class="share-grid">
          <div v-for="platform in sharingPlatforms" :key="platform.label" class="share-item" @click="shareEvent(platform)">
            <div :class="['share-icon', platform.class]">
              <i :class="platform.icon"></i>
            </div>
            <span class="share-label">{{ platform.label }}</span>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Lien de partage</label>
          <input v-model="event.link" type="text" class="form-input" readonly />
        </div>
      </div>
    </div>

    <!-- Boutons de navigation -->
    <div class="bottom-bar">
      <button v-if="activeStep > 1" @click="goToPreviousStep" class="action-button save-draft">Retour</button>
      <button v-if="activeStep < 3" @click="goToNextStep" class="action-button continue">Suivant</button>
      <button v-if="activeStep === 3" @click="saveEvent" class="action-button publish-button">Publier</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeStep: 1,
      stepTitles: ["Créer un événement", "Configuration des billets", "Promotion"],
      event: {
        title: "",
        description: "",
        date: "",
        time: "",
        location: "",
        link: "https://ariya.app/example",
        location: '',
        address: '', // Adresse sélectionnée via la carte
        lat: null, // Latitude sélectionnée
        lng: null, // Longitude sélectionnée
      },
      map: null,
      marker: null,

      mounted() {
    if (this.activeStep === 1) {
      this.initMap();
    }
  },
      tickets: [
        {
          name: "Pass Standard",
          description: "Accès général",
          price: 5000,
          quantity: 100,
        },
      ],
      sharingPlatforms: [
        { label: "WhatsApp", class: "whatsapp", icon: "fab fa-whatsapp" },
        { label: "Facebook", class: "facebook", icon: "fab fa-facebook-f" },
        { label: "Twitter", class: "twitter", icon: "fab fa-twitter" },
        { label: "Telegram", class: "telegram", icon: "fab fa-telegram-plane" },
      ],
    };
  },
  methods: {
    goBack() {
      history.back();
    },
    goToPreviousStep() {
      if (this.activeStep > 1) this.activeStep--;
    },
    goToNextStep() {
      if (this.activeStep < 3) this.activeStep++;
    },
    addTicketType() {
      this.tickets.push({
        name: "Nouveau type",
        description: "",
        price: 0,
        quantity: 0,
      });
    },
    shareEvent(platform) {
      alert(`Partager via ${platform.label}`);
    },
    saveEvent() {
      console.log("Événement sauvegardé :", this.event, this.tickets);
      alert("Événement publié avec succès !");
    },
  },
  initMap() {
      // Initialiser la carte Leaflet
      this.map = L.map('map').setView([6.3654, 2.4183], 13); // Centré sur Cotonou

      // Ajouter des tuiles de carte (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);

      // Ajouter un marqueur cliquable
      this.map.on('click', this.onMapClick);
    },
    onMapClick(e) {
      // Ajouter ou déplacer le marqueur
      if (this.marker) {
        this.map.removeLayer(this.marker);
      }
      this.marker = L.marker(e.latlng).addTo(this.map);

      // Mettre à jour les données de l'événement
      this.event.lat = e.latlng.lat;
      this.event.lng = e.latlng.lng;

      // Récupérer l'adresse via une API géocodage (facultatif, nécessite une API comme Nominatim ou Google Maps)
      this.event.address = `Latitude: ${e.latlng.lat}, Longitude: ${e.latlng.lng}`;
    },
};
</script>

<style scoped>
/* Styles combinés des trois étapes */
@import 'leaflet/dist/leaflet.css';


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

        .ticket-section {
            background: white;
            margin: 1rem;
            border-radius: 12px;
            overflow: hidden;
        }

        .section-header {
            padding: 1rem;
            border-bottom: 1px solid var(--light-gray);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .section-title {
            font-weight: 600;
        }

        .add-button {
            color: var(--primary);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }

        .ticket-type {
            padding: 1rem;
            border-bottom: 1px solid var(--light-gray);
        }

        .type-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 1rem;
        }

        .type-actions {
            display: flex;
            gap: 1rem;
            color: var(--gray);
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
        }

        .form-input:focus {
            outline: none;
            border-color: var(--primary);
        }

        .row {
            display: flex;
            gap: 1rem;
        }

        .col {
            flex: 1;
        }

        .toggle-switch {
            position: relative;
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

        .option-group {
            margin-top: 1rem;
            padding-top: 1rem;
            border-top: 1px solid var(--light-gray);
        }

        .option-toggle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .option-info {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
        }

        .option-title {
            font-weight: 500;
        }

        .option-description {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .pricing-options {
            background: var(--background);
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
        }

        .price-tier {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem;
            background: white;
            border-radius: 8px;
            margin-bottom: 0.5rem;
        }

        .tier-info {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;
        }

        .tier-dates {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .summary-section {
            background: white;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
            color: var(--gray);
        }

        .total-row {
            display: flex;
            justify-content: space-between;
            padding-top: 0.5rem;
            border-top: 1px solid var(--light-gray);
            font-weight: 600;
            color: var(--text);
        }

        .action-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-top: 1rem;
        }

        .action-button {
            padding: 1rem;
            border-radius: 25px;
            border: none;
            font-weight: 600;
            cursor: pointer;
        }

        .preview-button {
            background: var(--background);
            color: var(--text);
        }

        .continue-button {
            background: var(--primary);
            color: white;
        }
    
  

        .section {
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

        .share-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 1rem;
            padding: 1rem;
        }

        .share-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
            padding: 1rem;
            border-radius: 8px;
            background: var(--background);
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .share-item:hover {
            transform: translateY(-2px);
        }

        .share-icon {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            color: white;
        }

        .share-label {
            font-size: 0.8rem;
            text-align: center;
        }

        .whatsapp { background: #25D366; }
        .facebook { background: #1877F2; }
        .twitter { background: #1DA1F2; }
        .telegram { background: #0088cc; }

        .link-share {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border-bottom: 1px solid var(--light-gray);
        }

        .link-input {
            flex: 1;
            padding: 0.8rem;
            background: var(--background);
            border: none;
            border-radius: 8px;
            color: var(--text);
            font-size: 0.9rem;
        }

        .copy-button {
            padding: 0.8rem 1.5rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 20px;
            font-weight: 500;
            cursor: pointer;
        }

        .promo-option {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border-bottom: 1px solid var(--light-gray);
            cursor: pointer;
        }

        .promo-icon {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background: var(--background);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
        }

        .promo-info {
            flex: 1;
        }

        .promo-title {
            font-weight: 500;
            margin-bottom: 0.2rem;
        }

        .promo-description {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .discount-form {
            padding: 1rem;
            background: var(--background);
            margin: 1rem;
            border-radius: 8px;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
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
            font-size: 0.9rem;
        }

        .email-preview {
            background: white;
            margin: 1rem;
            padding: 1rem;
            border-radius: 8px;
            border: 1px solid var(--light-gray);
        }

        .preview-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            margin-bottom: 1rem;
            color: var(--gray);
        }

        .preview-content {
            padding: 1rem;
            background: var(--background);
            border-radius: 8px;
        }

        .action-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            padding: 1rem;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: white;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }

        .action-button {
            padding: 1rem;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
        }

        .preview-button {
            background: var(--background);
            color: var(--text);
        }

        .publish-button {
            background: var(--primary);
            color: white;
        }

        .stats-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            padding: 1rem;
        }

        .stat-card {
            background: var(--background);
            padding: 1rem;
            border-radius: 8px;
            text-align: center;
        }

        .stat-value {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 0.3rem;
        }

        .stat-label {
            font-size: 0.8rem;
            color: var(--gray);
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
</style>
