<template>
    <div>
      <h1>Authentification</h1>
      <button @click="authenticate">Obtenir Token</button>
      <div v-if="token">
        <h2>Token obtenu :</h2>
        <p>{{ token }}</p>
      </div>
      <div v-if="errorMessage">
        <h2>Erreur :</h2>
        <p>{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { getAuthToken } from "@/services/auth";
  
  export default {
    data() {
      return {
        token: null,
        errorMessage: null,
      };
    },
    methods: {
      async authenticate() {
        try {
          const response = await getAuthToken();
          this.token = response.access_token; // Stocke le token
        } catch (error) {
          this.errorMessage = error.message;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  