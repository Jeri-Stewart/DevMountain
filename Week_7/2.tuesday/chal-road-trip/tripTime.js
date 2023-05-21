const tripTime = (arr) => {
  let result = {
    avgSpeedLimits: [],
    segmentTimes: [],
    totalTime: null,
  };
  let { segmentTimes } = result;
  let { totalTime } = result;
  let tripSegment = 0;
  // loop through the array of objects
  stops.forEach((trip) => {
    let { speedLimits } = trip; // destructure variable
    for (segment of speedLimits) {
      // loop thorugh every segment of thet trip
      let { distance, speedLimit } = segment;
      let h = distance / speedLimit;
      tripSegment += h;k
    }
    segmentTimes.push(Math.ceil(tripSegment));
    totalTime += tripSegment; // not adding to toal time
    tripSegment = 0;
  });
  console.log(result);
};

// UNCOMMENT THE FUNCTION CALL AT
// THE BOTTOM BEFORE RUNNING THE FILE

const stops = [
  {
    name: `Gus's Gas`,
    speedLimits: [
      {
        distance: 5,
        speedLimit: 45,
      },
      {
        distance: 97,
        speedLimit: 65,
      },
      {
        distance: 72,
        speedLimit: 70,
      },
      {
        distance: 25,
        speedLimit: 50,
      },
    ],
    traffic: 12,
  },
  {
    name: `Halle's House of Pancakes`,
    speedLimits: [
      {
        distance: 36,
        speedLimit: 50,
      },
      {
        distance: 141,
        speedLimit: 75,
      },
    ],
    traffic: 0,
  },
  {
    name: `Jake's Great Shakes`,
    speedLimits: [
      {
        distance: 100,
        speedLimit: 75,
      },
      {
        distance: 84,
        speedLimit: 70,
      },
      {
        distance: 20,
        speedLimit: 75,
      },
    ],
    traffic: 30,
  },
  {
    name: `Luna's Lunch Counter`,
    speedLimits: [
      {
        distance: 3,
        speedLimit: 35,
      },
      {
        distance: 5,
        speedLimit: 45,
      },
      {
        distance: 20,
        speedLimit: 65,
      },
      {
        distance: 85,
        speedLimit: 75,
      },
      {
        distance: 3,
        speedLimit: 65,
      },
      {
        distance: 5,
        speedLimit: 55,
      },
    ],
    traffic: 7,
  },
];

tripTime(stops);
