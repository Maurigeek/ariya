// src/data/feed.js

export const feed = {
    user: {
      name: "John Doe",
      avatar: "https://via.placeholder.com/300",
      location: "Chargement...", // Initialement défini comme "Chargement..."
    },
    stats: [
      { label: "Événements", value: 12 },
      { label: "Réservations", value: 8 },
      { label: "Favoris", value: 5 },
    ],
    reservations: [
      {
        title: "Festival des Arts et de la Culture",
        date: "16 Déc, 2023",
        status: "upcoming",
        image: "https://via.placeholder.com/300",
      },
      {
        title: "Tech Meetup Bénin",
        date: "10 Déc, 2023",
        status: "past",
        image: "https://via.placeholder.com/300",
      },
    ],
    settings: [
      {
        label: "Notifications",
        description: "Gérer les alertes et rappels",
        icon: "fas fa-bell",
      },
      {
        label: "Paiements",
        description: "Moyens de paiement & historique",
        icon: "fas fa-wallet",
      },
      {
        label: "Sécurité",
        description: "Mot de passe & authentification",
        icon: "fas fa-shield-alt",
      },
      {
        label: "Support",
        description: "Aide & assistance",
        icon: "fas fa-headset",
      },
    ],
  };
  
  // Fonction pour récupérer la localisation via l'API ip-api
  export async function fetchLocation() {
    try {
      const response = await fetch("https://ip-api.com/json");
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      const data = await response.json();
      feed.user.location = data.city
        ? `${data.city}, ${data.country}`
        : "Localisation indisponible";
    } catch (error) {
      console.error("Erreur lors de la récupération de la localisation:", error);
      feed.user.location = "Erreur lors de la récupération";
    }
  }
  
  export default feed;
  