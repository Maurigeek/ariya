import { defineStore } from 'pinia';
import { getAuthToken } from '@/services/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    error: null,
  }),
  actions: {
    async authenticate() {
      try {
        const tokenData = await getAuthToken();
        this.token = tokenData.access_token;
      } catch (error) {
        this.error = error.message;
      }
    },
  },
});
