<template>
  <div>
    <!-- Bouton de chat flottant -->
    <div class="floating-chat" @click="toggleChat">
      <i class="fas fa-robot fa-2x"></i>
    </div>

    <!-- Fenêtre de chat -->
    <div v-if="isChatOpen" class="chat-window">
      <div class="chat-header">
        <span>Assistant</span>
        <button class="close-button btn btn-light" @click="toggleChat">&times;</button>
      </div>
      <div class="chat-body">
        <div class="message user">
          Bonjour ! Que cherchez-vous ? 😊
        </div>
        <div 
          v-for="(recommendation, index) in recommendations" 
          :key="index" 
          class="message bot"
        >
          {{ recommendation }}
        </div>
      </div>
      <div class="chat-footer">
        <input
          type="text" class="form-control"
          v-model="userMessage"
          placeholder="Entrez un message..."
          @keyup.enter="sendMessage"
        />
        <button @click="sendMessage">
  <i class="fas fa-paper-plane" aria-hidden="true"></i>
</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FloatingChat",
  data() {
    return {
      isChatOpen: false, // Pour contrôler l'affichage de la fenêtre de chat
      userMessage: "", // Stocke le message de l'utilisateur
      recommendations: [], // Liste des recommandations
    };
  },
  methods: {
    toggleChat() {
      this.isChatOpen = !this.isChatOpen; // Basculer l'état de la fenêtre de chat
    },
    sendMessage() {
      // Vérifie si le message n'est pas vide
      if (this.userMessage.trim() === "") return;

      // Ajouter le message de l'utilisateur à la liste des recommandations
      this.recommendations.push(`Vous avez demandé : "${this.userMessage}"`);

      // Réinitialiser le champ d'entrée
      this.userMessage = "";

      // Ajouter une recommandation simulée avec un délai
      setTimeout(() => {
        this.recommendations.push(
          "Voici une recommandation basée sur votre requête. 😊"
        );
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* Bouton flottant */
.floating-chat {
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: --secondary;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer; /* Assure que le bouton est cliquable */
  transition: transform 0.3s;
}
.floating-chat:hover {
  transform: scale(1.1); /* Effet d'agrandissement au survol */
}

/* Fenêtre de chat */
.chat-window {
  position: fixed;
  bottom: 80px;
  right: 20px;
  width: 310px;
  height: 80vh;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
}

/* En-tête de chat */
.chat-header {
  background-color: --primary;
  color: white;
  padding: 10px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Corps de chat */
.chat-body {
  flex: 1;
  padding: 10px;
  overflow-y: auto;
}

/* Pied de chat */
.chat-footer {
  display: flex;
  border-top: 1px solid #ddd;
  padding: 10px;
}
.chat-footer input {
  flex: 1;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.chat-footer button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.chat-footer button:hover {
  background-color: #45a049;
}

/* Messages */
.message {
  margin: 5px 0;

}
.message.user {
  text-align: left;
  color: #333;
}
.message.bot {
  text-align: left;
  background-color: #f1f1f1;
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
