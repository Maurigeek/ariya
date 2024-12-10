<template>
    <div>
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
          <div
            v-for="filter in filters"
            :key="filter.label"
            :class="['filter-chip', { active: filter.active }]"
            @click="setActiveFilter(filter.label)"
          >
            <i :class="filter.icon"></i>
            <span>{{ filter.label }}</span>
          </div>
        </div>
      </header>
  
      <div class="report-grid">
        <div class="report-card">
          <div class="report-header">
            <h2 class="report-title">Ventes par type de billet</h2>
            <div class="report-controls">
              <div class="control-icon">
                <i class="fas fa-ellipsis-v"></i>
              </div>
            </div>
          </div>
          <div class="chart-container">
            <canvas id="ticketChart"></canvas>
          </div>
          <div class="metric-grid">
            <div v-for="(metric, index) in metrics" :key="index" class="metric-item">
              <div class="metric-label">{{ metric.label }}</div>
              <div class="metric-value">{{ metric.value }}</div>
            </div>
          </div>
        </div>
        <!-- Ajoutez d'autres cartes ici -->
      </div>
    </div>
  </template>
  
  <script>
  import Chart from "chart.js/auto";
  
  export default {
    name: "RapportsDetailles",
    data() {
      return {
        filters: [
          { label: "Vue d'ensemble", icon: "fas fa-chart-pie", active: true },
          { label: "Audience", icon: "fas fa-users", active: false },
          { label: "Billets", icon: "fas fa-ticket-alt", active: false },
          { label: "Revenus", icon: "fas fa-money-bill-wave", active: false },
          { label: "Marketing", icon: "fas fa-bullhorn", active: false },
        ],
        metrics: [
          { label: "Pass VIP", value: "60%" },
          { label: "Pass Standard", value: "40%" },
        ],
      };
    },
    mounted() {
      this.renderCharts();
    },
    methods: {
      setActiveFilter(label) {
        this.filters.forEach((filter) => {
          filter.active = filter.label === label;
        });
      },
      renderCharts() {
        const ticketCtx = document.getElementById("ticketChart").getContext("2d");
        new Chart(ticketCtx, {
          type: "doughnut",
          data: {
            labels: ["Pass VIP", "Pass Standard"],
            datasets: [
              {
                data: [60, 40],
                backgroundColor: ["#FF6B35", "#2EC4B6"],
              },
            ],
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>

</style>