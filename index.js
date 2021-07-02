const { fetchMyIP, fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    // console.log("It didn't work!", error);
    return;
  }
  
  console.log('It worked! Return IP:', ip);
  
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      // console.log("Coordinants didn't work!", error);
      return;
    }
    console.log('Coordinants:', coords);
  });
});

