<template>
    <header class="header">
      <div class="header-top">
        <button class="back-button">
          <i class="fas fa-arrow-left"></i>
        </button>
        <div class="actions">
          <button class="action-button secondary-button">
            <i class="far fa-calendar"></i>
            <span>Cette semaine</span>
          </button>
          <button class="action-button primary-button">
            <i class="fas fa-download"></i>
            <span>Exporter</span>
          </button>
        </div>
      </div>
  
      <div class="filters">
        <div class="filter-chip active">
          <i class="fas fa-chart-pie"></i>
          <span>Vue d'ensemble</span>
        </div>
        <div class="filter-chip">
          <i class="fas fa-users"></i>
          <span>Audience</span>
        </div>
        <div class="filter-chip">
          <i class="fas fa-ticket-alt"></i>
          <span>Billets</span>
        </div>
        <div class="filter-chip">
          <i class="fas fa-money-bill-wave"></i>
          <span>Revenus</span>
        </div>
        <div class="filter-chip">
          <i class="fas fa-bullhorn"></i>
          <span>Marketing</span>
        </div>
      </div>
    </header>
  
    <div class="container my-4">
      <div class="row">
        <!-- Première carte -->
        <div class="col-12 col-md-6 mb-4">
          <div class="card shadow-sm">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="card-title mb-0">Ventes par type de billet</h5>
              <div class="dropdown">
                <button class="btn btn-sm btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <canvas ref="ticketChartRef"></canvas>
            </div>
          </div>
        </div>
        <!-- Deuxième carte -->
        <div class="col-12 col-md-6 mb-4">
          <div class="card shadow-sm">
            <div class="card-header d-flex justify-content-between align-items-center">
              <h5 class="card-title mb-0">Prévisions de vente</h5>
              <div class="dropdown">
                <button class="btn btn-sm btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  <i class="fas fa-ellipsis-v"></i>
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <canvas ref="forecastChartRef"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import Chart from "chart.js/auto";
  
  export default {
    name: "DetailedReports",
    setup() {
      const ticketChartRef = ref(null);
      const forecastChartRef = ref(null);
  
      const ticketData = {
        labels: ["Pass VIP", "Pass Standard"],
        datasets: [
          {
            data: [60, 40],
            backgroundColor: ["#4CAF50", "#FFC107"],
          },
        ],
      };
  
      const forecastData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Ventes",
            data: [80, 120, 150, 200, 250, 450],
            borderColor: "#4CAF50",
            tension: 0.4,
            fill: true,
            backgroundColor: "rgba(76, 175, 80, 0.2)",
          },
        ],
      };
  
      onMounted(() => {
        if (ticketChartRef.value) {
          new Chart(ticketChartRef.value, {
            type: "doughnut",
            data: ticketData,
          });
        }
  
        if (forecastChartRef.value) {
          new Chart(forecastChartRef.value, {
            type: "line",
            data: forecastData,
          });
        }
      });
  
      return {
        ticketChartRef,
        forecastChartRef,
      };
    },
  };
  </script>
  
  <style scoped>

.header {
            background: white;
            padding: 1rem;
            position: sticky;
            top: 0;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .back-button {
            border: none;
            background: none;
            font-size: 1.2rem;
            color: var(--text);
            cursor: pointer;
        }

        .actions {
            display: flex;
            gap: 1rem;
        }

        .action-button {
            padding: 0.5rem 1rem;
            border-radius: 20px;
            border: none;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
        }

        .primary-button {
            background: var(--primary);
            color: white;
        }

        .secondary-button {
            background: var(--background);
            color: var(--text);
        }

        .filters {
            display: flex;
            gap: 1rem;
            overflow-x: auto;
            padding: 0.5rem 0;
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        .filters::-webkit-scrollbar {
            display: none;
        }

        .filter-chip {
            padding: 0.5rem 1rem;
            background: var(--background);
            border-radius: 20px;
            white-space: nowrap;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .filter-chip.active {
            background: var(--primary);
            color: white;
        }

        .report-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 1rem;
        }

        .report-card {
            background: white;
            border-radius: 12px;
            padding: 1rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .report-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .report-title {
            font-weight: 600;
            font-size: 1.1rem;
        }

        .report-controls {
            display: flex;
            gap: 0.5rem;
        }

        .control-icon {
            width: 30px;
            height: 30px;
            border-radius: 15px;
            background: var(--background);
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--gray);
        }

        .chart-container {
            height: 200px;
            position: relative;
        }

        .metric-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .metric-item {
            padding: 0.5rem;
            background: var(--background);
            border-radius: 8px;
        }

        .metric-label {
            font-size: 0.8rem;
            color: var(--gray);
            margin-bottom: 0.3rem;
        }

        .metric-value {
            font-weight: 600;
        }

        .audience-stats {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .stat-row {
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .stat-progress {
            flex: 1;
            height: 8px;
            background: var(--light-gray);
            border-radius: 4px;
            overflow: hidden;
        }

        .progress-bar {
            height: 100%;
            background: var(--primary);
        }

        .stat-value {
            font-weight: 600;
            min-width: 60px;
            text-align: right;
        }

        .report-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }

        .report-table th,
        .report-table td {
            padding: 0.8rem;
            text-align: left;
            border-bottom: 1px solid var(--light-gray);
        }

        .report-table th {
            color: var(--gray);
            font-weight: normal;
            font-size: 0.9rem;
        }

        .trend-indicator {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            font-size: 0.9rem;
        }

        .trend-up {
            color: var(--success);
        }

        .trend-down {
            color: var(--danger);
        }

        .map-container {
            height: 200px;
            background: var(--background);
            border-radius: 8px;
            margin-top: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--gray);
        }
  .filters {
    overflow-x: auto;
  }
  
  .filter-chip {
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
  }
  
  .card {
    border-radius: 0.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  
  .card-header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #dee2e6;
  }
  
  canvas {
    max-width: 100%;
    height: 100%;
  }
  </style>
  