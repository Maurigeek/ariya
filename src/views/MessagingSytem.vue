<template>
    <header class="header">
      <div class="header-top">
        <button class="back-btn">
          <i class="fas fa-arrow-left"></i>
        </button>
        <h1>Messages</h1>
        <i class="fas fa-filter"></i>
      </div>
      
      <div class="search-box">
        <i class="fas fa-search search-icon"></i>
        <input 
          type="text" 
          class="search-input" 
          placeholder="Rechercher une conversation..." 
          v-model="searchQuery"
          @input="filterChats"
        >
      </div>
      
      <div class="chat-tabs">
        <div 
          v-for="tab in tabs" 
          :key="tab.name" 
          :class="['tab', { active: activeTab === tab.name }]"
          @click="changeTab(tab.name)"
        >
          {{ tab.label }}
        </div>
      </div>
    </header>
  
    <div class="chat-list">
      <div 
        v-for="chat in filteredChats" 
        :key="chat.id" 
        class="chat-item"
      >
        <div class="avatar" :style="{ position: 'relative' }">
          <i class="fas fa-user"></i>
          <div 
            class="status-indicator" 
            :class="chat.online ? 'status-online' : 'status-offline'"
          ></div>
        </div>
        <div class="chat-content">
          <div class="chat-header">
            <div class="chat-name">{{ chat.name }}</div>
            <div class="chat-time">{{ chat.time }}</div>
          </div>
          <div class="last-message">
            {{ chat.lastMessage }}
          </div>
        </div>
        <div class="chat-meta">
          <div v-if="chat.unread > 0" class="unread-badge">{{ chat.unread }}</div>
          <span class="chat-type">{{ chat.type }}</span>
        </div>
      </div>
    </div>
  
    <button class="fab" @click="addNewChat">
      <i class="fas fa-plus"></i>
    </button>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tabs: [
          { name: 'all', label: 'Tous' },
          { name: 'events', label: 'Événements' },
          { name: 'carpooling', label: 'Covoiturage' },
          { name: 'support', label: 'Support' },
          { name: 'organizers', label: 'Organisateurs' }
        ],
        activeTab: 'all',
        searchQuery: '',
        chats: [
          {
            id: 1,
            name: 'Support BeninEvents',
            time: '14:30',
            lastMessage: 'Bonjour ! Comment puis-je vous aider aujourd’hui ?',
            unread: 2,
            online: true,
            type: 'Support'
          },
          {
            id: 2,
            name: 'Jean D. (Covoiturage)',
            time: 'Hier',
            lastMessage: 'Je serai au point de rendez-vous à 17h30 précises.',
            unread: 0,
            online: false,
            type: 'Covoiturage'
          },
          {
            id: 3,
            name: 'Centre des Arts',
            time: '2j',
            lastMessage: 'Votre réservation pour le Festival des Arts a été confirmée !',
            unread: 0,
            online: false,
            type: 'Événements'
          }
        ],
        filteredChats: []
      };
    },
    methods: {
      filterChats() {
        const searchLower = this.searchQuery.toLowerCase();
        this.filteredChats = this.chats.filter(chat => {
          const matchesTab =
            this.activeTab === 'all' || chat.type.toLowerCase() === this.activeTab;
          const matchesSearch =
            chat.name.toLowerCase().includes(searchLower) ||
            chat.lastMessage.toLowerCase().includes(searchLower);
          return matchesTab && matchesSearch;
        });
      },
      changeTab(tab) {
        this.activeTab = tab;
        this.filterChats();
      },
      addNewChat() {
        const newChat = {
          id: Date.now(),
          name: 'Nouveau Chat',
          time: 'Maintenant',
          lastMessage: 'Ceci est un nouveau message.',
          unread: 1,
          online: true,
          type: 'Support'
        };
        this.chats.push(newChat);
        this.filterChats();
      }
    },
    mounted() {
      this.filterChats();
    }
  };
  </script>
  
  <style scoped>
  
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

        .search-box {
            position: relative;
        }

        .search-input {
            width: 100%;
            padding: 0.8rem 2.5rem;
            border: none;
            border-radius: 8px;
            background: var(--background);
            font-size: 0.9rem;
        }

        .search-icon {
            position: absolute;
            left: 1rem;
            top: 50%;
            transform: translateY(-50%);
            color: var(--gray);
        }

        .chat-tabs {
            display: flex;
            gap: 1rem;
            padding: 1rem;
            overflow-x: auto;
            scrollbar-width: none;
        }

        .chat-tabs::-webkit-scrollbar {
            display: none;
        }

        .tab {
            padding: 0.5rem 1rem;
            background: var(--background);
            border-radius: 20px;
            white-space: nowrap;
            color: var(--gray);
            font-size: 0.9rem;
            cursor: pointer;
        }

        .tab.active {
            background: var(--primary);
            color: white;
        }

        .chat-list {
            padding: 0 1rem;
        }

        .chat-item {
            display: flex;
            padding: 1rem;
            background: white;
            border-radius: 12px;
            margin-bottom: 1rem;
            gap: 1rem;
            align-items: center;
        }

        .avatar {
            width: 50px;
            height: 50px;
            border-radius: 25px;
            background: var(--background);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary);
        }

        .chat-content {
            flex: 1;
        }

        .chat-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.3rem;
        }

        .chat-name {
            font-weight: 500;
        }

        .chat-time {
            font-size: 0.8rem;
            color: var(--gray);
        }

        .last-message {
            font-size: 0.9rem;
            color: var(--gray);
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chat-meta {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 0.5rem;
        }

        .unread-badge {
            background: var(--primary);
            color: white;
            width: 20px;
            height: 20px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
        }

        .chat-type {
            padding: 0.3rem 0.8rem;
            background: var(--background);
            border-radius: 12px;
            font-size: 0.8rem;
            color: var(--gray);
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

        .status-indicator {
            width: 12px;
            height: 12px;
            border-radius: 6px;
            border: 2px solid white;
            position: absolute;
            bottom: 0;
            right: 0;
        }

        .status-online {
            background: var(--success);
        }

        .status-offline {
            background: var(--gray);
        }

        .verified-badge {
            display: flex;
            align-items: center;
            gap: 0.3rem;
            color: var(--secondary);
            font-size: 0.8rem;
        }

        .empty-state {
            text-align: center;
            padding: 3rem 1rem;
            color: var(--gray);
        }

        .empty-state i {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .empty-state p {
            font-size: 0.9rem;
            margin-bottom: 1rem;
        }
  </style>
  