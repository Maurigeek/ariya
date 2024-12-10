<template>
    <div class="chat-item">
      <div class="avatar" style="position: relative;">
        <i class="fas fa-user"></i>
        <div :class="['status-indicator', userStatusClass]"></div>
      </div>
      <div class="chat-content">
        <div class="chat-header">
          <div class="chat-name">{{ name }}</div>
          <div class="chat-time">{{ time }}</div>
        </div>
        <div class="last-message">
          {{ lastMessage }}
        </div>
      </div>
      <div class="chat-meta">
        <div v-if="unread" class="unread-badge">{{ unread }}</div>
        <span class="chat-type">{{ type }}</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      time: String,
      lastMessage: String,
      unread: Number,
      type: String,
      isOnline: Boolean
    },
    computed: {
      userStatusClass() {
        return this.isOnline ? 'status-online' : 'status-offline';
      }
    }
  };
  </script>
  
  <style scoped>
  /* Copiez les styles pertinents ici */
  </style>
  