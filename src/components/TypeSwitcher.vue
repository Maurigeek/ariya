<template>
    <div class="type-switcher">
      <div
        class="type-option"
        :class="{ active: activeType === 'events' }"
        @click="updateType('events')"
      >
        Événements
      </div>
      <div
        class="type-option"
        :class="{ active: activeType === 'tourism' }"
        @click="updateType('tourism')"
      >
        Tourisme
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TypeSwitcher',
    props: {
      activeType: String,
    },
    methods: {
      updateType(type) {
        this.$emit('updateActiveType', type);
      },
    },
  };
  </script>
  