const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    // console.log("It didn't work!", error);
    return;
  }
  
  // console.log('It worked! Return IP:', ip);
  
  fetchCoordsByIP(ip, (error, coords) => {
    if (error) {
      // console.log("Coordinants didn't work!", error);
      return;
    }

    fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
      if (error) {
        console.log(`Fly over times didn't work!, ${error}`);
      }
      // console.log('It worked! Here are the fly over details:',flyOverTimes);
      return;
    });
    // console.log('It worked! Coordinants:', coords);
  });
});



