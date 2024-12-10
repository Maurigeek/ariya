<template>
    <div>
      <header class="header">
        <div class="header-top">
          <button class="back-btn" @click="goBack">
            <i class="fas fa-arrow-left"></i>
          </button>
          <h1 class="header-title">Historique</h1>
        </div>
        <div class="search-bar">
          <input
            type="text"
            class="search-input"
            v-model="searchQuery"
            placeholder="Rechercher un ticket..."
          />
          <button class="filter-btn" @click="toggleFilters">
            <i class="fas fa-sliders-h"></i>
          </button>
        </div>
      </header>
  
      <div class="filter-row">
        <div
          v-for="(filter, index) in filters"
          :key="index"
          class="filter-chip"
          :class="{ active: activeFilter === filter }"
          @click="setActiveFilter(filter)"
        >
          {{ filter }}
        </div>
      </div>
  
      <div class="scan-list">
        <div v-if="loading" class="loading-indicator">Chargement...</div>
        <div v-else>
          <div v-if="scanItems.length === 0" class="no-results">
            <i class="fas fa-search"></i>
            <p>Aucun ticket trouvé</p>
          </div>
  
          <div
            v-for="scan in filteredScanItems"
            :key="scan.id"
            class="scan-item"
          >
            <div class="scan-header">
              <div class="ticket-info">
                <div class="ticket-type">
                  <i class="fas fa-ticket-alt"></i>
                </div>
                <div class="ticket-details">
                  <h3>{{ scan.name }}</h3>
                  <p>#{{ scan.id }} • {{ scan.passType }}</p>
                </div>
              </div>
              <span :class="['scan-status', scan.status]">{{ scan.statusText }}</span>
            </div>
            <div class="scan-body">
              <div class="scan-details">
                <div v-for="(detail, index) in scan.details" :key="index" class="detail-item">
                  <span class="detail-label">{{ detail.label }}</span>
                  <span class="detail-value">{{ detail.value }}</span>
                </div>
              </div>
              <div class="scan-actions">
                <button v-if="scan.status === 'status-success'" class="action-btn secondary-btn">
                  <i class="fas fa-print"></i>
                  <span>Reçu</span>
                </button>
                <button v-if="scan.status === 'status-error'" class="action-btn secondary-btn">
                  <i class="fas fa-exclamation-circle"></i>
                  <span>Signaler un problème</span>
                </button>
                <button class="action-btn primary-btn" @click="scanAgain(scan.id)">
                  <i class="fas fa-redo"></i>
                  <span>Scanner à nouveau</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <button class="fab" @click="openQRCodeScanner">
        <i class="fas fa-qrcode"></i>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
        activeFilter: 'Tous',
        filters: ['Tous', 'Validés', 'Invalides', 'Aujourd\'hui', 'Cette semaine'],
        loading: true,
        scanItems: [
          {
            id: 12345,
            name: 'John Doe',
            passType: 'Pass VIP',
            status: 'status-success',
            statusText: 'Validé',
            details: [
              { label: 'Date de scan', value: '15 Déc, 19:45' },
              { label: 'Scanné par', value: 'Agent 1' },
              { label: 'Porte', value: 'Entrée principale' },
              { label: 'Type de scan', value: 'QR Code' },
            ],
          },
          {
            id: 12346,
            name: 'Marie K.',
            passType: 'Pass Standard',
            status: 'status-error',
            statusText: 'Invalide',
            details: [
              { label: 'Date de scan', value: '15 Déc, 19:30' },
              { label: 'Scanné par', value: 'Agent 2' },
              { label: 'Raison', value: 'Ticket déjà utilisé' },
            ],
          },
        ],
      };
    },
    computed: {
      filteredScanItems() {
        let filtered = this.scanItems;
  
        // Filter by search query
        if (this.searchQuery) {
          filtered = filtered.filter((scan) =>
            scan.name.toLowerCase().includes(this.searchQuery.toLowerCase())
          );
        }
  
        // Filter by active filter
        if (this.activeFilter !== 'Tous') {
          filtered = filtered.filter((scan) => scan.statusText === this.activeFilter);
        }
  
        return filtered;
      },
    },
    methods: {
      setActiveFilter(filter) {
        this.activeFilter = filter;
      },
      goBack() {
        this.$router.go(-1);
      },
      scanAgain(scanId) {
        console.log(`Scanning ticket #${scanId} again.`);
      },
      toggleFilters() {
        // Logic to toggle the filter options (e.g., show/hide filter options)
        console.log('Filters clicked');
      },
      openQRCodeScanner() {
        // Open QR code scanner logic here
        console.log('Opening QR Code scanner');
      },
    },
    mounted() {
      setTimeout(() => {
        this.loading = false;
      }, 2000); // Simulate loading delay
    },
  };
  </script>
  
  <style scoped>
  /* Use your CSS styles here */


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
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .back-btn {
            border: none;
            background: none;
            font-size: 1.2rem;
            color: var(--text);
        }

        .header-title {
            font-size: 1.2rem;
            font-weight: 600;
        }

        .search-bar {
            display: flex;
            gap: 1rem;
        }

        .search-input {
            flex: 1;
            padding: 0.8rem 1rem;
            background: var(--background);
            border: none;
            border-radius: 8px;
            font-size: 0.9rem;
        }

        .filter-btn {
            padding: 0.8rem;
            background: var(--background);
            border: none;
            border-radius: 8px;
            color: var(--text);
        }

        .filter-row {
            display: flex;
            gap: 0.5rem;
            overflow-x: auto;
            padding: 1rem 0;
            margin: 0 1rem;
            scrollbar-width: none;
        }

        .filter-row::-webkit-scrollbar {
            display: none;
        }

        .filter-chip {
            padding: 0.5rem 1rem;
            background: white;
            border-radius: 20px;
            font-size: 0.9rem;
            white-space: nowrap;
            color: var(--gray);
        }

        .filter-chip.active {
            background: var(--primary);
            color: white;
        }

        .scan-list {
            padding: 1rem;
        }

        .scan-item {
            background: white;
            border-radius: 12px;
            margin-bottom: 1rem;
            overflow: hidden;
        }

        .scan-header {
            padding: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid var(--light-gray);
        }

        .ticket-info {
            display: flex;
            gap: 1rem;
            align-items: center;
        }

        .ticket-type {
            width: 40px;
            height: 40px;
            border-radius: 8px;
            background: var(--background);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
        }

        .ticket-details h3 {
            font-size: 1rem;
            margin-bottom: 0.2rem;
        }

        .ticket-details p {
            font-size: 0.9rem;
            color: var(--gray);
        }

        .scan-status {
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.8rem;
        }

        .status-success {
            background: rgba(39, 174, 96, 0.1);
            color: var(--success);
        }

        .status-error {
            background: rgba(231, 76, 60, 0.1);
            color: var(--danger);
        }

        .scan-body {
            padding: 1rem;
        }

        .scan-details {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-bottom: 1rem;
        }

        .detail-item {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
        }

        .detail-label {
            font-size: 0.8rem;
            color: var(--gray);
        }

        .detail-value {
            font-weight: 500;
        }

        .scan-actions {
            display: flex;
            gap: 1rem;
        }

        .action-btn {
            flex: 1;
            padding: 0.8rem;
            border: none;
            border-radius: 8px;
            font-size: 0.9rem;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
        }

        .primary-btn {
            background: var(--primary);
            color: white;
        }

        .secondary-btn {
            background: var(--background);
            color: var(--text);
        }

        .loading-indicator {
            padding: 1rem;
            text-align: center;
            color: var(--gray);
        }

        .no-results {
            text-align: center;
            padding: 2rem;
            color: var(--gray);
        }

        .no-results i {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .fab {
            position: fixed;
            bottom: 1rem;
            right: 1rem;
            width: 56px;
            height: 56px;
            border-radius: 28px;
            background: var(--primary);
            color: white;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            box-shadow: 0 2px 10px rgba(255, 107, 53, 0.3);
            cursor: pointer;
        }
  </style>
  