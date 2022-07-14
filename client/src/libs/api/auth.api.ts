import apiClient from './apiClient.api';

const AuthAPI = {
  logout: async () => {
    await apiClient.delete('/auth/logout');
  },
};

export default AuthAPI;