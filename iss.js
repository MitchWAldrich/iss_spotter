const request = require('request');

const nextISSTimesForMyLocation = (callback) => {
  fetchMyIP((error, ip) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(ip, (error, coords) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
        if (error) {
          return callback(error, null);
        }
        callback(null, flyOverTimes);
      });
    });
  });
};

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
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
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

const fetchISSFlyOverTimes = (coords, callback) => {
  request(`http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`, (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      return callback(Error(`${response.statusCode}: when fetching flyover times. ${body}`), null);
    }
    const flyOverTimes = JSON.parse(body).response;
    // console.log(flyOverTimes);
    return callback(null, flyOverTimes);
  });
};




module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
};