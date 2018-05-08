
//we wrap our own API calls in promises so we can await them

const axios = require('axios');
const https = require('https');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const instance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

module.exports = async (endpoint, data = {}) => {

  const url = 'https://localhost:8080' + endpoint;

  console.log('getting: ' + url);

  try {
    return await instance.post(url, data);
  } catch (err) {
    return Promise.reject(err);
  }

};
