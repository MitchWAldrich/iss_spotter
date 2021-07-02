const request = require('request-promise-native');

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};

const fetchMyIP = () => {  
  return request('https://api64.ipify.org?format=json');
};

const fetchCoordsByIP = (body) => {
  const ip = JSON.parse(body).ip;
  return request(`https://freegeoip.app/json/${ip}`);
};
const fetchISSFlyOverTimes = (body) => { 
  const latitude = JSON.parse(body).latitude;
  // console.log(latitude);
  const longitude = JSON.parse(body).longitude;
  const coords = { latitude, longitude };
  // console.log(`http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`)
  const url = `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`;
  return request(url);
    
};

module.exports = {
  nextISSTimesForMyLocation
}