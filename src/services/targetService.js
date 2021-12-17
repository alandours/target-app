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
}

export default new TargetService();
