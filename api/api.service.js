import axios from 'axios'

class ApiService {

  constructor(apiUrl = null) {
     const url = (!apiUrl) ? 'http://bolderfest.ru/user-profile/api/v1' : apiUrl;
     this.apiUrl = url
  }

  async get(url, id = null) {
      id = (id) ? '/' + id : '';
      const apiUrl = this.apiUrl + url + id;
      const response = await axios.get(apiUrl);
      return response;
  }

  post(url, data) {
    const apiUrl = this.apiUrl + url;
    return axios.post(apiUrl);
  }

  put(url, data) {
    const apiUrl = this.apiUrl + url;
    return axios.put(apiUrl);
  }

  delete(url, id) {
    const apiUrl = this.apiUrl + url + '/' + id;
    return axios.delete(apiUrl);
  }

  setApiUrl(url) {
    this.apiUrl =  url;
  }

  getApiUrl(url = '') {
    return this.apiUrl + url;
  }

  responseHandle(response) {

  }

  errorHandle() {

  }

}

export default ApiService


// {
//   // `data` is the response that was provided by the server
//   data: {},
//
//   // `status` is the HTTP status code from the server response
//   status: 200,
//
//     // `statusText` is the HTTP status message from the server response
//   statusText: 'OK',
//
//   // `headers` the HTTP headers that the server responded with
//   // All header names are lower cased and can be accessed using the bracket notation.
//   // Example: `response.headers['content-type']`
//   headers: {},
//
//   // `config` is the config that was provided to `axios` for the request
//   config: {},
//
//   // `request` is the request that generated this response
//   // It is the last ClientRequest instance in node.js (in redirects)
//   // and an XMLHttpRequest instance in the browser
//   request: {}
// }
