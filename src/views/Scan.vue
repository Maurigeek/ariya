<template>
    <div>
      <!-- Header -->
      <header class="scanner-header">
        <div class="header-left">
          <button @click="toggleFlash" class="toggle-flash">
            <i class="fas fa-bolt"></i>
          </button>
          <div class="event-info">
            <div class="event-title">Festival des Arts</div>
            <div class="event-date">16 Déc • 19:00</div>
          </div>
        </div>
      </header>
  
      <!-- Scanner View -->
      <main class="scanner-view">
        <div class="scan-overlay">
          <div class="scan-corners top-left"></div>
          <div class="scan-corners top-right"></div>
          <div class="scan-corners bottom-left"></div>
          <div class="scan-corners bottom-right"></div>
          <div class="scan-line"></div>
        </div>
        <div class="scan-helper">Placez le QR code dans le cadre</div>
      </main>
  
      <!-- Scanner Controls -->
      <div class="scanner-controls">
        <button @click="openKeyboard" class="control-btn">
          <i class="fas fa-keyboard"></i>
        </button>
        <button @click="openSettings" class="control-btn">
          <i class="fas fa-cog"></i>
        </button>
      </div>
  
      <!-- Stats Bar -->
      <div class="stats-bar">
        <div class="stat-item" v-for="(count, status) in stats" :key="status">
          <div class="stat-value">{{ count }}</div>
          <div class="stat-label">{{ status }}</div>
        </div>
      </div>
  
      <!-- Result Modal -->
      <div v-if="showModal" class="result-modal">
        <div class="result-header">
          <div class="result-icon success-icon">
            <i class="fas fa-check"></i>
          </div>
          <div>
            <h2>Ticket valide</h2>
            <p style="color: var(--gray)">Scan effectué avec succès</p>
          </div>
        </div>
  
        <div class="ticket-details">
          <div class="detail-item" v-for="(value, label) in ticketDetails" :key="label">
            <div class="detail-label">{{ label }}</div>
            <div class="detail-value">{{ value }}</div>
          </div>
        </div>
  
        <div class="result-actions">
          <button @click="cancel" class="action-btn secondary-btn">Annuler</button>
          <button @click="validateTicket" class="action-btn primary-btn">Valider l'entrée</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stats: {
          Validés: 234,
          "En attente": 86,
          Invalides: 2,
        },
        showModal: false,
        ticketDetails: {
          Type: "Pass VIP",
          Prix: "10,000 FCFA",
          Nom: "John Doe",
          "ID Ticket": "#12345",
        },
      };
    },
    methods: {
      toggleFlash() {
        // Simule le basculement de la lumière du flash
        alert("Flash toggled!");
      },
      openKeyboard() {
        // Ouvrir le clavier
        alert("Clavier ouvert");
      },
      openSettings() {
        // Ouvrir les paramètres
        alert("Paramètres ouverts");
      },
      onQRCodeScan(result) {
        // Simule un scan de QR Code
        if (result.valid) {
          this.stats.Validés++;
          this.ticketDetails = result.ticket;
          this.showModal = true;
        } else {
          this.stats.Invalides++;
          alert("Ticket invalide");
        }
      },
      cancel() {
        // Fermer la fenêtre modale
        this.showModal = false;
      },
      validateTicket() {
        // Valider le ticket et mettre à jour les statistiques
        alert("Entrée validée");
        this.stats["En attente"]--;
        this.stats.Validés++;
        this.showModal = false;
      },
    },
    mounted() {
      // Simuler un scan après 2 secondes
      setTimeout(() => {
        const scanResult = {
          valid: true,
          ticket: {
            Type: "Pass VIP",
            Prix: "10,000 FCFA",
            Nom: "John Doe",
            "ID Ticket": "#12345",
          },
        };
        this.onQRCodeScan(scanResult);
      }, 2000);
    },
  };
  </script>



<style scoped>
.scanner-header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #333;
  color: white;
}

.header-left {
  display: flex;
  align-items: center;
}

.toggle-flash {
  margin-right: 10px;
  cursor: pointer;
}

.event-info {
  display: flex;
  flex-direction: column;
}

.event-title {
  font-size: 18px;
}

.event-date {
  font-size: 14px;
}

.scanner-view {
  position: relative;
  width: 100%;
  height: 400px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scan-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scan-corners {
  position: absolute;
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
}

.top-left {
  top: 0;
  left: 0;
}

.top-right {
  top: 0;
  right: 0;
}

.bottom-left {
  bottom: 0;
  left: 0;
}

.bottom-right {
  bottom: 0;
  right: 0;
}

.scan-line {
  position: absolute;
  width: 100%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.7);
  animation: scan 2s infinite;
}

@keyframes scan {
  0% {
    top: 10%;
  }
  50% {
    top: 50%;
  }
  100% {
    top: 90%;
  }
}

.scan-helper {
  font-size: 16px;
  color: #333;
  position: absolute;
}

.scanner-controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.control-btn {
  margin: 0 10px;
  background-color: transparent;
  color: #333;
  border: 1px solid #333;
  padding: 5px;
  cursor: pointer;
}

.stats-bar {
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f1f1f1;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 18px;
  font-weight: bold;
}

.result-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
}

.result-header {
  display: flex;
  align-items: center;
}

.result-icon {
  margin-right: 10px;
  font-size: 24px;
  color: green;
}

.result-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.action-btn {
  padding: 10px;
  border: none;
  cursor: pointer;
}

.secondary-btn {
  background-color: #ccc;
}

.primary-btn {
  background-color: #28a745;
  color: white;
}
</style>
