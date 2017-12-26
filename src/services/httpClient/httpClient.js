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
      // responseType: 'json',
      data
    })
      .then(({data}) => data);
  }

  get(resource, params) {
    return this.service.get(resource, {
      responseType: 'json',
      ...params
    })
      .then(({data}) => data);
  }

  post(url, data) {
    return this.request({
      method: 'post',
      url,
      data
    });
  }

  put(url, data) {
    return this.request({
      method: 'put',
      url,
      data
    });
  }

  delete(url, data) {
    return this.request(url, {
      method: 'delete',
      url,
      data
    });
  }
}

const httpClient = new HttpService(process.env.API_URL);

export default httpClient;
