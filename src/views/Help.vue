<template>
    <div>
      <!-- Header Assistance -->
      <div class="profile-header">
        <div class="user-info">
          <h1 class="user-name">Ariya Assistant</h1>
          <p class="subtitle">Votre guide pour toutes vos questions et préoccupations.</p>
        </div>
      </div>
  
      <!-- Sections Assistance -->
      <div class="profile-sections">
        <!-- FAQ -->
        <div class="section-card">
          <div class="section-header">
            <h2 class="section-title">Questions Fréquemment Posées</h2>
          </div>
          <div class="faq-list">
            <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
              <h3 class="faq-question" @click="toggleFaq(index)">
                {{ faq.question }}
                <i :class="faq.open ? 'fas fa-chevron-up' : 'fas fa-chevron-down'"></i>
              </h3>
              <p class="faq-answer" v-if="faq.open">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
  
        <!-- Contact Section -->
        <div class="section-card">
          <div class="section-header">
            <h2 class="section-title">Contactez-Nous</h2>
          </div>
          <ul class="contact-list">
            <li class="contact-item">
              <i class="fas px-3 fa-envelope"></i>
              <a href="mailto:support@ariya.com">support@ariya.com</a>
            </li>
            <li class="contact-item">
              <i class="fas px-3 fa-phone"></i>
              <a href="tel:+22912345678">+229 12 34 56 78</a>
            </li>
            <li class="contact-item">
              <i class="fab px-3 fa-whatsapp"></i>
              <a href="https://wa.me/22912345678" target="_blank">WhatsApp</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        faqs: [
          {
            question: "Comment créer un compte sur Ariya ?",
            answer: "Pour créer un compte, cliquez sur 'S'inscrire' en haut de la page et remplissez vos informations.",
            open: false,
          },
          {
            question: "Comment modifier mes réservations ?",
            answer: "Accédez à votre tableau de bord, sélectionnez une réservation et cliquez sur 'Modifier'.",
            open: false,
          },
          {
            question: "Quels sont les moyens de paiement acceptés ?",
            answer: "Nous acceptons les paiements par carte bancaire, mobile money et virement bancaire.",
            open: false,
          },
        ],
      };
    },
    methods: {
      toggleFaq(index) {
        this.faqs[index].open = !this.faqs[index].open;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Header Styles */
  .profile-header {
    background: white;
    padding: 2rem 1rem;
    text-align: center;
    position: relative;
  }
  
  .profile-cover {
    height: 120px;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    opacity: 0.1;
  }
  
  .user-info {
    position: relative;
    z-index: 1;
  }
  
  .user-name {
    font-size: 2rem;
    font-weight: bold;
    color: var(--text);
  }
  
  .subtitle {
    font-size: 1rem;
    color: var(--gray);
  }
  
  /* FAQ Section */
  .faq-list {
    padding: 1rem;
  }
  
  .faq-item {
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--light-gray);
  }
  
  .faq-question {
    cursor: pointer;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text);
  }
  
  .faq-answer {
    margin-top: 0.5rem;
    color: var(--gray);
    font-size: 0.9rem;
  }
  
  /* Contact Section */
  .contact-list {
    list-style: none;
    padding: 1rem;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .contact-item i {
    margin-right: 0.5rem;
    color: var(--primary);
  }
  
  .contact-item a {
    color: var(--text);
    text-decoration: none;
  }
  
  .contact-item a:hover {
    color: var(--primary);
  }
  
  /* General Section Styles */
  .section-card {
    background: white;
    margin-bottom: 1rem;
    border-radius: 12px;
    overflow: hidden;
  }
  
  .section-header {
    padding: 1rem;
    border-bottom: 1px solid var(--light-gray);
    font-weight: bold;
    font-size: 1.2rem;
    color: var(--primary);
  }
  </style>
  