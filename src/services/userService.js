import httpClient from 'httpClient';

class UserService {
  login(user) {
    return httpClient.post('/users/sign_in', user);
  }

  logout() {
    return httpClient.delete('/users/sign_out', { data: {} });
  }

  signUp(user) {
    return httpClient.post('/users', user);
  }

  getProfile(user) {
    return httpClient.get(`/users/${user.id}`, { data: null });
  }

  updateProfile(user) {
    return httpClient.put(`/users/${user.id}`, user);
  }

  changePassword(data) {
    return httpClient.put(`/users/password`, data);
  }
}

export default new UserService();
