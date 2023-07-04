import { defineStore } from 'pinia';
import { useCookies } from '@vueuse/integrations/useCookies';

interface User {
  name: string;
  login: string;
}

interface AuthState {
  isAuthorized: boolean;
  user: User | null;
}

// Initialize cookies outside of the store
const { get, set } = useCookies(['access_token']);

export const useAuth = defineStore('auth', {
  state: (): AuthState => ({
    isAuthorized: !!(get('access_token')),
    user: null,
  }),
  actions: {
    async login(userDetails: {login: string, password: string}){
      const response = await fetch('http://167.71.61.120:3000/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userDetails)
      });

      if(response.ok){
        const data = await response.json();
        if (data.token) {
          set('access_token', data.token);

          this.isAuthorized = true;
          this.user = data.user;
        }
      }
    },
    logout(){
      // Remove the access token from the cookies
      // cookies.remove('access_token');

      // // Set the user as not authorized and remove the user details
      // this.isAuthorized = false;
      // this.user = null;
    }
  }
});
