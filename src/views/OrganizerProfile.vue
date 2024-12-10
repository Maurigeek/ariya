<template>
    <div class="profile-header">
      <div class="header-cover"></div>
      <button class="edit-profile-btn" @click="editProfile">
        <i class="fas fa-pen"></i>
        <span>Modifier</span>
      </button>
      <div class="profile-content">
        <div class="profile-avatar">
          <i class="fas fa-user"></i>
        </div>
        <h1 class="profile-name">{{ profile.name }}</h1>
        <div class="profile-type">{{ profile.type }}</div>
        <div class="verification-badge" v-if="profile.verified">
          <i class="fas fa-check-circle"></i>
          <span>Vérifié</span>
        </div>
      </div>
    </div>
  
    <div class="profile-stats">
      <div class="stat-item" v-for="(stat, index) in stats" :key="index">
        <div class="stat-value">{{ stat.value }}</div>
        <div class="stat-label">{{ stat.label }}</div>
      </div>
    </div>
  
    <div class="tabs">
      <div
        class="tab"
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ active: activeTab === tab }"
        @click="setActiveTab(tab)"
      >
        {{ tab }}
      </div>
    </div>
  
    <div class="menu-list">
      <div class="menu-card" v-for="(menu, index) in menuItems" :key="index">
        <div class="menu-header">
          <h2 class="menu-title">{{ menu.title }}</h2>
        </div>
        <div
          class="menu-item"
          v-for="(item, itemIndex) in menu.items"
          :key="itemIndex"
          @click="goToPage(item.link)"
        >
          <div class="menu-icon">
            <i :class="item.icon"></i>
          </div>
          <div class="menu-info">
            <div class="menu-label">{{ item.label }}</div>
            <div class="menu-description">{{ item.description }}</div>
          </div>
          <i class="fas fa-chevron-right" style="color: var(--gray)"></i>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profile: {
          name: "Centre Culturel Béninois",
          type: "Organisateur Professionnel",
          verified: true
        },
        stats: [
          { value: 24, label: "Événements" },
          { value: "15.2K", label: "Participants" },
          { value: 4.8, label: "Note moyenne" }
        ],
        tabs: ["Aperçu", "Événements", "Analyses", "Paramètres"],
        activeTab: "Aperçu",
        menuItems: [
          {
            title: "Paramètres du compte",
            items: [
              {
                label: "Informations professionnelles",
                description: "Coordonnées et documents légaux",
                icon: "fas fa-building",
                link: "/info-pro"
              },
              {
                label: "Paiements et finances",
                description: "Méthodes de paiement et transactions",
                icon: "fas fa-wallet",
                link: "/finances"
              },
              {
                label: "Sécurité",
                description: "Mot de passe et authentification",
                icon: "fas fa-shield-alt",
                link: "/securite"
              }
            ]
          },
          {
            title: "Documents",
            items: [
              {
                label: "Document 1",
                description: "Description du document 1",
                icon: "fas fa-file",
                link: "/document1"
              },
              {
                label: "Document 2",
                description: "Description du document 2",
                icon: "fas fa-file",
                link: "/document2"
              }
            ]
          }
        ]
      };
    },
    methods: {
      editProfile() {
        alert("Édition du profil !");
      },
      setActiveTab(tab) {
        this.activeTab = tab;
      },
      goToPage(link) {
        alert(`Naviguer vers ${link}`);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Style CSS similaire à votre code d'origine */

  .profile-header {
            background: white;
            padding: 2rem 1rem;
            position: relative;
        }

        .header-cover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 150px;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            opacity: 0.1;
        }

        .profile-content {
            position: relative;
            text-align: center;
            margin-top: 2rem;
        }

        .profile-avatar {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin: 0 auto 1rem;
            background: var(--background);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2.5rem;
            color: var(--primary);
            border: 4px solid white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .profile-name {
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }

        .profile-type {
            font-size: 0.9rem;
            color: var(--gray);
            margin-bottom: 1rem;
        }

        .verification-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
            background: rgba(39, 174, 96, 0.1);
            color: var(--success);
            border-radius: 20px;
            font-size: 0.9rem;
        }

        .profile-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            padding: 1.5rem 1rem;
            background: white;
            margin-top: 1rem;
        }

        .stat-item {
            text-align: center;
        }

        .stat-value {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 0.3rem;
        }

        .stat-label {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .menu-list {
            margin: 1rem;
        }

        .menu-card {
            background: white;
            border-radius: 12px;
            margin-bottom: 1rem;
            overflow: hidden;
        }

        .menu-header {
            padding: 1rem;
            border-bottom: 1px solid var(--light-gray);
        }

        .menu-title {
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--text);
        }

        .menu-item {
            display: flex;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid var(--light-gray);
            cursor: pointer;
        }

        .menu-item:last-child {
            border-bottom: none;
        }

        .menu-icon {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            background: var(--background);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            margin-right: 1rem;
        }

        .menu-info {
            flex: 1;
        }

        .menu-label {
            font-weight: 500;
            margin-bottom: 0.2rem;
        }

        .menu-description {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .document-card {
            display: flex;
            align-items: center;
            padding: 1rem;
            background: white;
            border-radius: 12px;
            margin-bottom: 1rem;
        }

        .document-icon {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background: var(--background);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            margin-right: 1rem;
        }

        .document-info {
            flex: 1;
        }

        .document-actions {
            display: flex;
            gap: 0.5rem;
        }

        .document-button {
            padding: 0.5rem;
            border-radius: 8px;
            border: none;
            background: var(--background);
            color: var(--text);
            cursor: pointer;
        }

        .tabs {
            display: flex;
            background: white;
            padding: 0.5rem;
            gap: 0.5rem;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .tab {
            flex: 1;
            padding: 0.8rem;
            text-align: center;
            border-radius: 8px;
            font-size: 0.9rem;
            cursor: pointer;
            color: var(--gray);
        }

        .tab.active {
            background: var(--primary);
            color: white;
        }

        .chart-section {
            background: white;
            margin: 1rem;
            padding: 1rem;
            border-radius: 12px;
        }

        .chart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .chart-title {
            font-weight: 600;
        }

        .chart-container {
            height: 200px;
            background: var(--background);
            border-radius: 8px;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray);
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin: 1rem;
        }

        .metric-card {
            background: white;
            padding: 1rem;
            border-radius: 12px;
        }

        .metric-header {
            font-size: 0.9rem;
            color: var(--gray);
            margin-bottom: 0.5rem;
        }

        .metric-value {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--text);
            margin-bottom: 0.5rem;
        }

        .metric-trend {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
        }

        .trend-up {
            color: var(--success);
        }

        .trend-down {
            color: var(--danger);
        }

        .edit-profile-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            padding: 0.5rem 1rem;
            background: white;
            border: none;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 0.9rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .notification-dot {
            width: 8px;
            height: 8px;
            border-radius: 4px;
            background: var(--danger);
            position: absolute;
            top: 0;
            right: 0;
        }

        .settings-divider {
            height: 1px;
            background: var(--light-gray);
            margin: 0.5rem 0;
        }
    
  </style>
  