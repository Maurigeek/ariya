<template>
    <div>
      <!-- Header -->
      <header class="header">
        <button class="back-btn" @click="goBack">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h1 class="page-title">Réservation</h1>
      </header>
  
      <!-- Résumé de l'événement -->
      <div class="event-summary">
        <div class="event-basic">
          <img src="https://via.placeholder.com/300" alt="Event" class="event-image">
          <div class="event-info">
            <h3>Festival des Arts et de la Culture</h3>
            <div class="event-details">
              <div><i class="far fa-calendar"></i> Sam, 16 Déc • 19:00</div>
              <div><i class="fas fa-map-marker-alt"></i> Cotonou, Bénin</div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Section des billets -->
      <div class="ticket-section">
        <h2 class="section-title">
          Sélectionnez vos billets
          <span style="color: var(--gray); font-size: 0.9rem;">Max. 4 tickets</span>
        </h2>
  
        <div
          class="ticket-type"
          v-for="(ticket, index) in tickets"
          :key="index"
        >
          <div class="ticket-header">
            <div>
              <div style="font-weight: 600;">{{ ticket.name }}</div>
              <div style="color: var(--gray); font-size: 0.9rem;">
                {{ ticket.description }}
              </div>
            </div>
            <div class="ticket-price">{{ ticket.price }} FCFA</div>
          </div>
          <div class="quantity-control">
            <button class="quantity-btn" @click="updateQuantity(index, -1)">
              -
            </button>
            <span>{{ ticket.quantity }}</span>
            <button class="quantity-btn" @click="updateQuantity(index, 1)">
              +
            </button>
          </div>
        </div>
      </div>
  
      <!-- Modes de paiement -->
      <div class="payment-method">
        <h2 class="section-title">Mode de paiement</h2>
        <div
          class="method-option"
          v-for="(method, index) in paymentMethods"
          :key="index"
          :class="{ selected: selectedPaymentMethod === method }"
          @click="selectPaymentMethod(method)"
        >
          <div class="method-icon">
            <i :class="method.icon"></i>
          </div>
          <div class="method-info">
            <div class="method-name">{{ method.name }}</div>
            <div class="method-description">{{ method.description }}</div>
          </div>
          <i v-if="selectedPaymentMethod === method" class="fas fa-check" style="color: var(--primary)"></i>
        </div>
      </div>
  
      <!-- Récapitulatif -->
      <div class="summary-section">
        <h2 class="section-title">Récapitulatif</h2>
        <div class="summary-row" v-for="(item, index) in summary" :key="index">
          <span>{{ item.label }}</span>
          <span>{{ item.value }} FCFA</span>
        </div>
        <div class="summary-row summary-total">
          <span>Total</span>
          <span>{{ totalPrice }} FCFA</span>
        </div>
      </div>
  
      <div style="height: 100px;"></div>
  
      <!-- Bouton de paiement -->
      <div class="checkout-button">
        <button class="pay-btn" @click="processPayment">
          Payer {{ totalPrice }} FCFA
        </button>
        <div class="secure-info">
          <i class="fas fa-lock"></i>
          <span>Paiement sécurisé</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tickets: [
          { name: "Pass VIP", description: "Accès premium + Cocktail", price: 10000, quantity: 0 },
          { name: "Pass Standard", description: "Accès général", price: 5000, quantity: 1 },
        ],
        paymentMethods: [
          { name: "Mobile Money", description: "Celtiis Cash", icon: "fas fa-mobile-alt" },
        ],
        selectedPaymentMethod: null,
        serviceFee: 1500,
      };
    },
    computed: {
      summary() {
        return [
          ...this.tickets
            .filter((ticket) => ticket.quantity > 0)
            .map((ticket) => ({
              label: `${ticket.quantity} × ${ticket.name}`,
              value: ticket.quantity * ticket.price,
            })),
          { label: "Frais de service", value: this.serviceFee },
        ];
      },
      totalPrice() {
        return this.summary.reduce((sum, item) => sum + item.value, 0);
      },
    },
    methods: {
      goBack() {
        history.back();
      },
      updateQuantity(index, change) {
        const ticket = this.tickets[index];
        if (ticket.quantity + change >= 0 && ticket.quantity + change <= 4) {
          ticket.quantity += change;
        }
      },
      selectPaymentMethod(method) {
        this.selectedPaymentMethod = method;
      },
      processPayment() {
        if (!this.selectedPaymentMethod) {
          alert("Veuillez sélectionner un mode de paiement.");
          return;
        }
        alert(`Paiement de ${this.totalPrice} FCFA via ${this.selectedPaymentMethod.name}`);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Copiez les styles de votre fichier HTML ici */


  .header {
            background: white;
            padding: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .back-btn {
            border: none;
            background: none;
            font-size: 1.2rem;
            color: var(--text);
        }

        .page-title {
            font-size: 1.2rem;
            font-weight: 600;
        }

        .event-summary {
            background: white;
            margin: 1rem;
            padding: 1rem;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
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

        .event-info h3 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }

        .event-details {
            color: var(--gray);
            font-size: 0.9rem;
        }

        .ticket-section {
            background: white;
            margin: 1rem;
            padding: 1rem;
            border-radius: 12px;
        }

        .section-title {
            font-size: 1.1rem;
            font-weight: 600;
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .ticket-type {
            padding: 1rem;
            border: 1px solid #eee;
            border-radius: 8px;
            margin-bottom: 1rem;
        }

        .ticket-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
        }

        .ticket-price {
            color: var(--primary);
            font-weight: 600;
        }

        .quantity-control {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: 1rem;
        }

        .quantity-btn {
            width: 30px;
            height: 30px;
            border-radius: 15px;
            border: 1px solid var(--gray);
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text);
        }

        .payment-method {
            background: white;
            margin: 1rem;
            padding: 1rem;
            border-radius: 12px;
        }

        .method-option {
            display: flex;
            align-items: center;
            gap: 1rem;
            padding: 1rem;
            border: 1px solid #eee;
            border-radius: 8px;
            margin-bottom: 0.5rem;
            cursor: pointer;
        }

        .method-option.selected {
            border-color: var(--primary);
            background: rgba(255, 107, 53, 0.05);
        }

        .method-icon {
            width: 40px;
            height: 40px;
            background: var(--background);
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
        }

        .method-info {
            flex: 1;
        }

        .method-name {
            font-weight: 600;
        }

        .method-description {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .summary-section {
            background: white;
            margin: 1rem;
            padding: 1rem;
            border-radius: 12px;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.5rem;
            font-size: 0.95rem;
        }

        .summary-total {
            border-top: 1px solid #eee;
            margin-top: 1rem;
            padding-top: 1rem;
            font-weight: 600;
        }

        .checkout-button {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 1rem;
            background: white;
            box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
        }

        .pay-btn {
            width: 100%;
            padding: 1rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 1rem;
        }

        .secure-info {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            color: var(--green);
            font-size: 0.9rem;
            margin-top: 0.5rem;
        }
    
  </style>
  