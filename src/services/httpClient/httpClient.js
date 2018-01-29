import axios from 'axios';

class HttpService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;

    this.service = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      withCredentials: true
    });

    this.service.interceptors.response.use(
      responseSuccessInterceptor,
      responseFailureInterceptor
    );
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

  get(resource, params={}) {
    return this.service.get(resource, {
      responseType: 'json',
      params
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

const responseSuccessInterceptor = (response) => {
  return response;
};

const responseFailureInterceptor = (error) => {
  if (error.response.data) {
    if (error.response.data.status === 401) {
      location.pathname !== '/login'
        ? window.location.href = `${location.origin}/login`
        : null;
    }
  }
  return Promise.reject(error.response);
};

const httpClient = new HttpService(process.env.API_URL);

export default httpClient;
