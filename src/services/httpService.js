import axios from 'axios';

class HttpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;

    this.service = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    });
  }

  request({method, url, data}) {
    return this.service.request({
      method,
      url,
      responseType: 'json',
      data
    })
      .then(({data}) => data);
  }

  get(resource) {
    return this.service.get(resource, {
      responseType: 'json'
    })
      .then(({data}) => data);
  }

  post(url, data) {
    return this.request({
      method: 'post',
      url,
      responseType: 'json',
      data
    });
  }

  put(url, data) {
    return this.request({
      method: 'post',
      url,
      responseType: 'json',
      data
    });
  }

  delete(url, data) {
    return this.request(url, {
      method: 'post',
      url,
      responseType: 'json',
      data
    });
  }
}

const httpService = new HttpService('http://code-battle.westeurope.cloudapp.azure.com/api');

export default httpService;
