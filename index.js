const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = passTimes => {
  for (const pass of passTimes) {
    const date = new Date(pass.risetime * 1000);
    const duration = pass.duration;
    console.log(`Next pass at ${date} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log(`It didn't work! ${error}`);
  }
  
  printPassTimes(passTimes);
});



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


