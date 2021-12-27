import httpClient from 'httpClient';

class TargetService {
  getTargets() {
    return httpClient.get('/targets', { data: null });
  }

  getTopics() {
    return httpClient.get('/topics', { data: null });
  }

  createTarget(target) {
    return httpClient.post('/targets', target);
  }

  deleteTarget(target) {
    return httpClient.delete(`/targets/${target.id}`, { data: null });
  }
}

export default new TargetService();
