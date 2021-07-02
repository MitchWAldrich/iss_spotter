const request = require('request');

const fetchMyIP = function(callback) {

  request('https://api64.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching IP. ${body}`), null);
      return;
    }

    const ip = JSON.parse(body).ip;
    return callback(null, ip);
  });
  
};

const fetchCoordsByIP = (ip, callback) => {
  request('https://freegeoip.app/json/', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }

    if (response.statusCode !== 200) {
      callback(Error(`Status Code ${response.statusCode} when fetching coordinates. ${body}`), null);
      return;
    }

    const coords = {
      "latitude": JSON.parse(body).latitude,
      "longitude": JSON.parse(body).longitude
    };
    return callback(null, coords);
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};