<template>
    <div>
      <!-- En-tête de confirmation -->
      <div class="success-header">
        <div class="success-icon">
          <i class="fas fa-check"></i>
        </div>
        <h1 class="success-title">Réservation confirmée !</h1>
        <p>Votre billet a été envoyé par email</p>
      </div>
  
      <!-- Informations sur le ticket -->
      <div class="ticket-info">
        <div class="ticket-header">
          <div class="event-basic">
            <img :src="event.image" alt="Event" class="event-image" />
            <div>
              <h2 class="event-title">{{ event.title }}</h2>
              <div class="event-details">
                <span><i class="far fa-calendar"></i> {{ event.date }}</span>
                <span><i class="fas fa-map-marker-alt"></i> {{ event.location }}</span>
                <span><i class="fas fa-ticket-alt"></i> {{ ticket.type }}</span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Corps du ticket -->
        <div class="ticket-body">
          <div class="qr-section">
            <div class="qr-code">
              <img :src="ticket.qrCode" alt="QR Code" style="width: 100%;" />
            </div>
            <span class="ticket-number">N° TICKET: {{ ticket.number }}</span>
          </div>
  
          <div class="info-grid">
            <div class="info-item">
              <div class="info-label">Nom</div>
              <div class="info-value">{{ ticket.name }}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Quantité</div>
              <div class="info-value">{{ ticket.quantity }} personne</div>
            </div>
            <div class="info-item">
              <div class="info-label">Type</div>
              <div class="info-value">{{ ticket.type }}</div>
            </div>
            <div class="info-item">
              <div class="info-label">Prix</div>
              <div class="info-value">{{ ticket.price }} FCFA</div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Boutons d'action -->
      <div class="action-buttons">
        <button class="action-btn secondary-btn" @click="downloadTicket">
          <i class="fas fa-download"></i>
          <span>Télécharger</span>
        </button>
        <button class="action-btn primary-btn" @click="shareTicket">
          <i class="fas fa-share-alt"></i>
          <span>Partager</span>
        </button>
      </div>
  
      <!-- Section d'aide -->
      <div class="help-section">
        <p class="help-text">Besoin d'aide avec votre réservation ?</p>
        <a href="#" class="help-link">
          <i class="fas fa-headset"></i>
          <span>Contacter le support</span>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        event: {
          title: "Festival des Arts et de la Culture",
          date: "Sam, 16 Déc • 19:00",
          location: "Cotonou, Bénin",
          image: "https://via.placeholder.com/300",
        },
        ticket: {
          name: "John Doe",
          quantity: 1,
          type: "Pass Standard",
          price: 5000,
          number: "FAC-2023-12345",
          qrCode: "https://cdn3.me-qr.com/qr/147345290.png?v=1733768014",
        },
      };
    },
    methods: {
      downloadTicket() {
        // Logique pour télécharger le ticket (par exemple, générer un PDF ou sauvegarder l'image QR)
        alert("Téléchargement en cours...");
      },
      shareTicket() {
        // Logique de partage
        if (navigator.share) {
          navigator.share({
            title: `Mon billet - ${this.event.title}`,
            text: `Voici mon billet pour le ${this.event.title}!`,
            url: `https://example.com/ticket/${this.ticket.number}`,
          });
        } else {
          alert("Le partage n'est pas pris en charge par votre navigateur.");
        }
      },
    },
    mounted() {
      // Animation de succès
      const successIcon = document.querySelector(".success-icon");
      if (successIcon) {
        successIcon.animate(
          [
            { transform: "scale(0.8)" },
            { transform: "scale(1.1)" },
            { transform: "scale(1)" },
          ],
          {
            duration: 600,
            easing: "ease-out",
          }
        );
      }
    },
  };
  </script>
  
  <style scoped>
  /* Copiez ici les styles de votre fichier HTML */


  .success-header {
            background: var(--success);
            color: white;
            padding: 2rem 1rem;
            text-align: center;
        }

        .success-icon {
            width: 60px;
            height: 60px;
            background: rgba(255,255,255,0.2);
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1rem;
            font-size: 1.5rem;
        }

        .success-title {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }

        .ticket-info {
            background: white;
            margin: 1rem;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .ticket-header {
            padding: 1rem;
            border-bottom: 2px dashed #eee;
            position: relative;
        }

        .ticket-header::before,
        .ticket-header::after {
            content: '';
            position: absolute;
            bottom: -8px;
            width: 16px;
            height: 16px;
            background: var(--background);
            border-radius: 50%;
        }

        .ticket-header::before {
            left: -8px;
        }

        .ticket-header::after {
            right: -8px;
        }

        .event-basic {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .event-image {
            width: 80px;
            height: 80px;
            border-radius: 8px;
            object-fit: cover;
        }

        .event-details span {
            display: block;
            margin-bottom: 0.3rem;
            font-size: 0.9rem;
            color: var(--gray);
        }

        .event-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text);
            margin-bottom: 0.5rem;
        }

        .ticket-body {
            padding: 1rem;
        }

        .qr-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 1rem 0;
        }

        .qr-code {
            width: 200px;
            height: 200px;
            background: white;
            padding: 1rem;
            border-radius: 10px;
            margin-bottom: 0.5rem;
        }

        .ticket-number {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-top: 1rem;
        }

        .info-item {
            background: var(--background);
            padding: 1rem;
            border-radius: 8px;
        }

        .info-label {
            font-size: 0.8rem;
            color: var(--gray);
            margin-bottom: 0.3rem;
        }

        .info-value {
            font-weight: 600;
            color: var(--text);
        }

        .action-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin: 1rem;
        }

        .action-btn {
            padding: 1rem;
            border-radius: 25px;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-weight: 500;
            cursor: pointer;
        }

        .primary-btn {
            background: var(--primary);
            color: white;
        }

        .secondary-btn {
            background: var(--background);
            color: var(--text);
        }

        .help-section {
            margin: 2rem 1rem;
            text-align: center;
        }

        .help-text {
            color: var(--gray);
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }

        .help-link {
            color: var(--primary);
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

  </style>
  