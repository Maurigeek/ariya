<template>
    <div>
      <!-- Header -->
      <header class="header">
        <div class="header-top">
          <button class="back-btn" @click="goBack">
            <i class="fas fa-arrow-left"></i>
          </button>
          <h1>Gestion des Agents</h1>
          <button class="add-agent-btn" @click="openModal">
            <i class="fas fa-plus"></i>
            <span>Ajouter</span>
          </button>
        </div>
      </header>
  
      <!-- Statistiques -->
      <div class="stats-grid">
        <div class="stat-card" v-for="(stat, index) in stats" :key="index">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
  
      <!-- Filtres -->
      <div class="filters">
        <div
          v-for="(filter, index) in filters"
          :key="index"
          class="filter-chip"
          :class="{ active: activeFilter === filter }"
          @click="setFilter(filter)"
        >
          {{ filter }}
        </div>
      </div>
  
      <!-- Barre de recherche -->
      <div class="search-box">
        <i class="fas fa-search search-icon"></i>
        <input
          type="text"
          class="search-input"
          placeholder="Rechercher un agent..."
          v-model="searchQuery"
        />
      </div>
  
      <!-- Liste des agents -->
      <div class="agent-list">
        <div
          class="agent-card"
          v-for="(agent, index) in filteredAgents"
          :key="index"
        >
          <div class="agent-header">
            <div class="agent-avatar">
              <i class="fas fa-user"></i>
            </div>
            <div class="agent-info">
              <h3 class="agent-name">{{ agent.name }}</h3>
              <div class="agent-role">{{ agent.role }} • {{ agent.zone }}</div>
            </div>
            <span
              class="status-badge"
              :class="{ 'status-active': agent.active, 'status-inactive': !agent.active }"
            >
              {{ agent.active ? "En service" : "Hors service" }}
            </span>
          </div>
          <div class="agent-stats">
            <div class="mini-stat" v-for="(stat, key) in agent.stats" :key="key">
              <div class="mini-stat-value">{{ stat.value }}</div>
              <div class="mini-stat-label">{{ stat.label }}</div>
            </div>
          </div>
          <div class="agent-actions">
            <button class="action-btn secondary-btn">
              <i class="fas fa-eye"></i>
              <span>Activité</span>
            </button>
            <button class="action-btn primary-btn">
              <i class="fas fa-cog"></i>
              <span>Gérer</span>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Modal d'ajout d'agent -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title">Ajouter un agent</h2>
            <button class="close-btn" @click="closeModal">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <form @submit.prevent="addAgent">
            <div class="form-group">
              <label class="form-label">Nom complet</label>
              <input type="text" class="form-input" v-model="newAgent.name" />
            </div>
            <div class="form-group">
              <label class="form-label">Téléphone</label>
              <input type="tel" class="form-input" v-model="newAgent.phone" />
            </div>
            <div class="form-group">
              <label class="form-label">Rôle</label>
              <select class="form-input" v-model="newAgent.role">
                <option>Agent</option>
                <option>Agent principal</option>
                <option>Superviseur</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Zone d'affectation</label>
              <select class="form-input" v-model="newAgent.zone">
                <option>Entrée principale</option>
                <option>Entrée VIP</option>
                <option>Zone backstage</option>
              </select>
            </div>
            <div class="modal-actions">
              <button type="button" class="action-btn secondary-btn" @click="closeModal">
                Annuler
              </button>
              <button type="submit" class="action-btn primary-btn">
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stats: [
          { label: "Agents actifs", value: 8 },
          { label: "Scans aujourd'hui", value: "1,234" },
          { label: "Taux de succès", value: "98.5%" },
        ],
        filters: ["Tous", "Entrée principale", "VIP", "Actifs", "Inactifs"],
        activeFilter: "Tous",
        searchQuery: "",
        agents: [
          {
            name: "Jean Dupont",
            role: "Agent principal",
            zone: "Entrée VIP",
            active: true,
            stats: {
              scans: { value: 234, label: "Scans" },
              accuracy: { value: "99.5%", label: "Précision" },
              activeTime: { value: "4h 30m", label: "Temps actif" },
            },
          },
          {
            name: "Marie Martin",
            role: "Agent",
            zone: "Entrée principale",
            active: false,
            stats: {
              scans: { value: 156, label: "Scans" },
              accuracy: { value: "98.2%", label: "Précision" },
              activeTime: { value: "3h 45m", label: "Temps actif" },
            },
          },
        ],
        showModal: false,
        newAgent: {
          name: "",
          phone: "",
          role: "Agent",
          zone: "Entrée principale",
        },
      };
    },
    computed: {
      filteredAgents() {
        let agents = this.agents;
        if (this.activeFilter !== "Tous") {
          agents = agents.filter((agent) =>
            this.activeFilter === "Actifs"
              ? agent.active
              : this.activeFilter === "Inactifs"
              ? !agent.active
              : agent.zone === this.activeFilter
          );
        }
        if (this.searchQuery) {
          agents = agents.filter((agent) =>
            agent.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
        return agents;
      },
    },
    methods: {
      goBack() {
        history.back();
      },
      setFilter(filter) {
        this.activeFilter = filter;
      },
      openModal() {
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.resetNewAgent();
      },
      addAgent() {
        this.agents.push({
          ...this.newAgent,
          active: true,
          stats: {
            scans: { value: 0, label: "Scans" },
            accuracy: { value: "0%", label: "Précision" },
            activeTime: { value: "0h 0m", label: "Temps actif" },
          },
        });
        this.closeModal();
      },
      resetNewAgent() {
        this.newAgent = {
          name: "",
          phone: "",
          role: "Agent",
          zone: "Entrée principale",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Copiez ici les styles de votre fichier HTML */

  .header {
            background: white;
            padding: 1rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .back-btn {
            border: none;
            background: none;
            font-size: 1.2rem;
            color: var(--text);
        }

        .add-agent-btn {
            padding: 0.5rem 1rem;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }

        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin: 1rem;
        }

        .stat-card {
            background: white;
            padding: 1rem;
            border-radius: 12px;
            text-align: center;
        }

        .stat-value {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--primary);
            margin-bottom: 0.5rem;
        }

        .stat-label {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .agent-list {
            margin: 1rem;
        }

        .agent-card {
            background: white;
            border-radius: 12px;
            margin-bottom: 1rem;
            overflow: hidden;
        }

        .agent-header {
            padding: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
            border-bottom: 1px solid var(--light-gray);
        }

        .agent-avatar {
            width: 50px;
            height: 50px;
            border-radius: 25px;
            background: var(--background);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
            font-size: 1.5rem;
        }

        .agent-info {
            flex: 1;
        }

        .agent-name {
            font-weight: 600;
            margin-bottom: 0.2rem;
        }

        .agent-role {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .status-badge {
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
            font-size: 0.8rem;
        }

        .status-active {
            background: rgba(39, 174, 96, 0.1);
            color: var(--success);
        }

        .status-inactive {
            background: rgba(149, 165, 166, 0.1);
            color: var(--gray);
        }

        .agent-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            padding: 1rem;
            gap: 1rem;
            border-bottom: 1px solid var(--light-gray);
        }

        .mini-stat {
            text-align: center;
        }

        .mini-stat-value {
            font-weight: 600;
            margin-bottom: 0.2rem;
        }

        .mini-stat-label {
            font-size: 0.8rem;
            color: var(--gray);
        }

        .agent-actions {
            display: flex;
            padding: 1rem;
            gap: 1rem;
        }

        .action-btn {
            flex: 1;
            padding: 0.8rem;
            border: none;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            cursor: pointer;
            font-size: 0.9rem;
        }

        .primary-btn {
            background: var(--primary);
            color: white;
        }

        .secondary-btn {
            background: var(--background);
            color: var(--text);
        }

        .filters {
            display: flex;
            gap: 0.5rem;
            overflow-x: auto;
            padding: 0 1rem;
            margin-bottom: 1rem;
            scrollbar-width: none;
        }

        .filters::-webkit-scrollbar {
            display: none;
        }

        .filter-chip {
            padding: 0.5rem 1rem;
            background: white;
            border-radius: 20px;
            white-space: nowrap;
            color: var(--gray);
            cursor: pointer;
        }

        .filter-chip.active {
            background: var(--primary);
            color: white;
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            display: none;
            align-items: center;
            justify-content: center;
            padding: 1rem;
        }

        .modal-content {
            background: white;
            border-radius: 12px;
            width: 100%;
            max-width: 500px;
            padding: 1.5rem;
        }

        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .modal-title {
            font-size: 1.2rem;
            font-weight: 600;
        }

        .close-btn {
            border: none;
            background: none;
            color: var(--gray);
            font-size: 1.2rem;
            cursor: pointer;
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

        .modal-actions {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }

        .search-box {
            margin: 1rem;
            position: relative;
        }

        .search-input {
            width: 100%;
            padding: 0.8rem 1rem 0.8rem 2.5rem;
            border: none;
            border-radius: 8px;
            background: white;
            font-size: 0.9rem;
        }

        .search-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--gray);
        }
  
  </style>
  