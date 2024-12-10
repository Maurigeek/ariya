<template>
    <div>
      <!-- Header Profil -->
      <div class="profile-header">
        <div class="profile-cover"></div>
        <button class="edit-profile-btn" @click="editProfile" >
          <i class="fas fa-pen"></i>
          <span>Modifier</span>
        </button>
        <div class="user-info">
          <img src="https://via.placeholder.com/300" alt="Profile" class="profile-avatar">
          <h1 class="user-name">{{ user.name }}</h1>
          <div class="user-location">
            <i class="fas fa-map-marker-alt"></i>
            <span>{{ location }}</span>
          </div>
        </div>
        <div class="stats-bar">
          <div class="stat-item" v-for="(stat, index) in stats" :key="index">
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
  
      <!-- Sections Profil -->
      <div class="profile-sections">
        <!-- Réservations -->
        <div class="section-card">
          <div class="section-header">
            <h2 class="section-title">Mes réservations</h2>
            <a href="#" class="section-link">Voir tout</a>
          </div>
          <div class="events-list">
            <div class="event-item" v-for="(event, index) in reservations" :key="index">
              <img :src="event.image" alt="Event" class="event-image">
              <div class="event-details">
                <h3>{{ event.title }}</h3>
                <div class="event-date">{{ event.date }}</div>
                <span
                  class="event-status"
                  :class="{ 'status-upcoming': event.status === 'upcoming', 'status-past': event.status === 'past' }"
                >
                  {{ event.status === 'upcoming' ? 'À venir' : 'Passé' }}
                </span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Paramètres -->
        <div class="section-card">
          <div class="section-header">
            <h2 class="section-title">Paramètres</h2>
          </div>
          <ul class="menu-list">
            <li v-for="(item, index) in settings" :key="index">
              <a href="#" class="menu-item">
                <div class="menu-icon">
                  <i :class="item.icon"></i>
                </div>
                <div class="menu-text">
                  <div class="menu-label">{{ item.label }}</div>
                  <div class="menu-description">{{ item.description }}</div>
                </div>
                <i class="fas fa-chevron-right"></i>
              </a>
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
        user: {
          name: "John Doe",

        },
       location: "Chargement...",

      
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

    },

    mounted() {
    this.getLocation();
  },
    methods: {
      editProfile() {
        this.$router.push('/edit-profile');
      },
      getLocation() {
      // Utilisation de l'API ip-api
      fetch("http://ip-api.com/json")
        .then((response) => response.json())
        .then((data) => {
          if (data.city) {
            this.location = data.city;
          } else {
            this.location = "Localisation indisponible";
          }
        })
        .catch(() => {
          this.location = "Erreur lors de la récupération de la localisation";
        });
    },
    },
  };
  </script>
  
  
  <style scoped>
  /* Copiez ici le style CSS donné dans votre fichier HTML */
  
  .profile-header {
            background: white;
            padding: 2rem 1rem 3rem;
            position: relative;
        }

        .profile-cover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 120px;
            background: linear-gradient(45deg, var(--primary), var(--secondary));
            opacity: 0.1;
        }

        .user-info {
            position: relative;
            text-align: center;
            padding-top: 1rem;
        }

        .profile-avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto 1rem;
            border: 4px solid white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .user-name {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .user-location {
            color: var(--gray);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .stats-bar {
            display: flex;
            justify-content: space-around;
            margin-top: 2rem;
            border-top: 1px solid var(--light-gray);
            padding-top: 1rem;
        }

        .stat-item {
            text-align: center;
        }

        .stat-value {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary);
        }

        .stat-label {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .profile-sections {
            padding: 1rem;
        }

        .section-card {
            background: white;
            border-radius: 12px;
            margin-bottom: 1rem;
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

        .section-link {
            color: var(--primary);
            text-decoration: none;
            font-size: 0.9rem;
        }

        .events-list {
            max-height: 300px;
            overflow-y: auto;
        }

        .event-item {
            display: flex;
            padding: 1rem;
            gap: 1rem;
            border-bottom: 1px solid var(--light-gray);
        }

        .event-image {
            width: 60px;
            height: 60px;
            border-radius: 8px;
            object-fit: cover;
        }

        .event-details h3 {
            font-size: 1rem;
            margin-bottom: 0.3rem;
        }

        .event-date {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .event-status {
            font-size: 0.8rem;
            padding: 0.2rem 0.5rem;
            border-radius: 10px;
            color: white;
        }

        .status-upcoming {
            background: var(--primary);
        }

        .status-past {
            background: var(--gray);
        }

        .menu-list {
            list-style: none;
        }

        .menu-item {
            display: flex;
            align-items: center;
            padding: 1rem;
            gap: 1rem;
            border-bottom: 1px solid var(--light-gray);
            color: var(--text);
            text-decoration: none;
        }

        .menu-item:last-child {
            border-bottom: none;
        }

        .menu-icon {
            width: 40px;
            height: 40px;
            background: var(--background);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
        }

        .menu-text {
            flex: 1;
        }

        .menu-label {
            margin-bottom: 0.2rem;
        }

        .menu-description {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .edit-profile-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 20px;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }
  </style>
  