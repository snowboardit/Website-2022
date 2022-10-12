// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

// Currently set to general Brunswick area
const LAT = 45.3507;
const LON = -68.5429;

// Container host takes precedence, then env file host, then default
const HOST = process.env.HOST || process.env.NEXT_PUBLIC_CHOSEN_HOST

console.log("HOST: ", HOST)

export default async function handler(req, res) {

  const currentLocalDateTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })); // capture date and time now then convert it to local time for comparison
  const { currentSkyColor, timeOfDay } = await getCurrentSkyColors(currentLocalDateTime);
  console.log(currentSkyColor, timeOfDay)

  res.status(200).json({ currentSkyColor: currentSkyColor, timeOfDay: timeOfDay })
}

/**
 * 1. Pass in current date and time for request
 * 2. Look up appropriate sky colors for given local date/time
 * 3. return appropriate sky colors as object
 * 
 * @param currentDateTime: Date - current date/time
 * @returns currentSkyColor: Object - skycolor object to present to frontend
 */

async function getCurrentSkyColors(currentDateTime) {

  const skyColors = await getSkyColors();
  const sunTimes = await getSunTimes();

  let currentSkyColor = {};
  let timeOfDay = '';

  /** 
   *  Dawn: from sunTimes.astronomical_twilight_begin - sunTimes.sunrise
   *  Day: sunTimes.sunrise - sunTimes.sunset
   *  Dusk: sunTimes.sunset - sunTimes.astronomical_twilight_end
   *  Night: all other times
   */

  try {

    const astro_twilight_begin = new Date(new Date(sunTimes.astronomical_twilight_begin).toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const sunrise = new Date(new Date(sunTimes.sunrise.toLocaleString('en-US', { timeZone: 'America/New_York' })));
    const sunset = new Date(new Date(sunTimes.sunset).toLocaleString('en-US', { timeZone: 'America/New_York' }));
    const astro_twilight_end = new Date(new Date(sunTimes.astronomical_twilight_end).toLocaleString('en-US', { timeZone: 'America/New_York' }));

    if (currentDateTime > astro_twilight_begin && currentDateTime < sunrise) {
      console.log('currently dawn')
      currentSkyColor = skyColors.dawn
      timeOfDay = 'dawn'

    } else if (currentDateTime > sunset && currentDateTime < astro_twilight_end) {
      console.log('currently dusk')
      currentSkyColor = skyColors.dusk
      timeOfDay = 'dusk'

    } else if (currentDateTime > sunrise && currentDateTime < sunset) {
      console.log('currently daytime')
      currentSkyColor = skyColors.day
      timeOfDay = 'day'

    } else {
      console.log('currently night')
      currentSkyColor = skyColors.night
      timeOfDay = 'night'

    }

    // console.log("\n\ncurrentDateTime", currentDateTime.toString())
    // console.log("sunrise", sunrise.toString())
    // console.log("sunset", sunset.toString())

    // console.log("currentDateTime > astro_twilight_begin && currentDateTime < sunrise", currentDateTime > astro_twilight_begin && currentDateTime < sunrise)
    // console.log("currentDateTime > sunset && currentDateTime < astro_twilight_end", currentDateTime > sunset && currentDateTime < astro_twilight_end)
    // console.log("currentDateTime > sunrise && currentDateTime < sunset", currentDateTime > sunrise && currentDateTime < sunset)
    // console.log("currentDateTime > sunset", currentDateTime > sunset)

    console.log("current sky color and time of day: ", currentSkyColor, timeOfDay)

    return { currentSkyColor: currentSkyColor, timeOfDay: timeOfDay }
  } catch (e) {
    console.log(e)
  }

}


/**
 * function getSunTimes
 * 1. Reach out to sunrise/sunset api
 * 2. Retrieve said data in json (** times are in UTC **)
 */
async function getSunTimes() {

  try {
    const { data } = await axios.get(`https://api.sunrise-sunset.org/json?lat=${LAT}&lng=${LON}&formatted=0`);
    return data.results;
  } catch (err) {
    console.log("couldn't get sun times: ", err)
  }

  /**
   * EXAMPLE OUTPUT:
   * {
      sunrise: '11:35:13 PM',
      sunset: '3:05:58 PM',
      solar_noon: '7:20:36 AM',
      day_length: '15:30:45',
      civil_twilight_begin: '11:00:48 PM',
      civil_twilight_end: '3:40:23 PM',
      nautical_twilight_begin: '10:13:21 PM',
      nautical_twilight_end: '4:27:50 PM',
      astronomical_twilight_begin: '9:13:06 PM',
      astronomical_twilight_end: '5:28:05 PM'
    }
   */

}

/**
 * Get skyColors object from server
 * @returns skyColors: Object
 */
async function getSkyColors() {
  const { data } = await axios.get(`${HOST}/skyColors.json`);
  return data.skyColors;
}