const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = passTimes => {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    // console.log(datetime.setUTCSeconds(pass.risetime));
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log(`It didn't work! ${error}`);
  }

  // console.log(passTimes);

// fetchMyIP((error, ip) => {
//   if (error) {
//     // console.log("It didn't work!", error);
//     return;
//   }
  
//   // console.log('It worked! Return IP:', ip);
  
//   fetchCoordsByIP(ip, (error, coords) => {
//     if (error) {
//       // console.log("Coordinants didn't work!", error);
//       return;
//     }

//     fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
//       if (error) {
//         console.log(`Fly over times didn't work!, ${error}`);
//       }
//       // console.log('It worked! Here are the fly over details:',flyOverTimes);
//       return;
//     });
//     // console.log('It worked! Coordinants:', coords);
//   });
// });
printPassTimes(passTimes);
});


