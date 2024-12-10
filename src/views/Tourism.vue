<template>
    <div id="app">
      <!-- Header -->
      <header class="header">
        <div class="header-left">
          <button class="back-button" @click="goBack">
            <i class="fas fa-arrow-left"></i>
          </button>
          <h1 class="header-title">Liste des tourismes disponibles</h1>
        </div>
      </header>
  
      <!-- Type Switcher -->
      <TypeSwitcher :activeType="activeType" @switchType="updateActiveType" />
  
      <!-- Categories -->
      <Categories />
  
      <!-- Tourism Cards -->
      <div class="container">
        <TourismCard v-for="(destination, index) in destinations" :key="index" :destination="destination" />
      </div>
  
      <!-- Floating Chat -->
      <FloatingChat />
  
      <!-- Bottom Navigation -->
      <BottomNav />
    </div>
  </template>


<script>
import Header from "../components/Header.vue";
import TypeSwitcher from "../components/TypeSwitcher.vue";
import Categories from "../components/Categories.vue";
import TourismCard from "../components/TourismCard.vue";
import FloatingChat from "../components/FloatingChat.vue";
import BottomNav from "../components/BottomNav.vue";

export default {
  components: {
    Header,
    TypeSwitcher,
    Categories,
    TourismCard,
    FloatingChat,
    BottomNav,
  },
  data() {
    return {
      activeType: "tourism",
      destinations: [], // Liste des destinations touristiques
    };
  },
  methods: {
    updateActiveType(type) {
      this.activeType = type;
    },
    goBack() {
      window.history.length > 1 ? history.back() : this.$router.push("/");
    },
    async fetchDestinations() {
      try {
        // Appel à une API fictive pour obtenir les données des destinations
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();

        this.destinations = data.slice(0, 8).map((item, index) => ({
          name: item.title,
          location: `Lieu aléatoire ${index + 1}`,
          tags: ["Tourisme", "Découverte"],
          image: `https://via.placeholder.com/300x200?text=Destination+${index + 1}`,
          link: `/tourism/${item.id}`,
        }));
      } catch (error) {
        console.error("Erreur lors de la récupération des destinations :", error);
      }
    },
  },
  mounted() {
    this.fetchDestinations();
  },
};
</script>


<style scoped>



@import '../assets/style.css';

</style>
