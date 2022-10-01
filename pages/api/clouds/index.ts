// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";

// Currently set to general Brunswick area
const LAT = 43.9140;
const LON = 69.9670;

// Container host takes precedence, then env file host, then default
const HOST = process.env.HOST || process.env.NEXT_PUBLIC_CHOSEN_HOST

console.log("HOST: ", HOST)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const currentDate = new Date(); // capture date and time now
  const currentSkyColor = await getCurrentSkyColors(currentDate);

  res.status(200).json({ currentSkyColors: currentSkyColor })
}

/**
 * 1. Pass in current date and time for request
 * 2. Look up appropriate sky colors for given time
 * 3. return appropriate sky colors in json
 * 
 * @param currentDateTime: Date - current date/time
 * @returns currentSkyColor: Object - skycolor object to present to frontend
 */

async function getCurrentSkyColors(currentDateTime) {

  const skyColors = await getSkyColors();
  const sunTimes = await getSunTimes();
  let currentSkyColor = {};

  /** 
   *  ALL TIMES CONVERTED TO EASTERN
   *  Dawn: from sunTimes.astronomical_twilight_begin - sunTimes.sunrise
   *  Day: sunTimes.sunrise - sunTimes.sunset
   *  Dusk: sunTimes.sunset - sunTimes.astronomical_twilight_end
   *  Night: all other times
   */

  try {
    const astro_twilight_begin = new Date(sunTimes.astronomical_twilight_begin);
    const sunrise = new Date(sunTimes.sunrise);
    const sunset = new Date(sunTimes.sunset);
    const astro_twilight_end = new Date(sunTimes.astronomical_twilight_end);


    switch (currentDateTime) {

      // Dawn: Between astro twighlight beginning and sunrise
      case currentDateTime > astro_twilight_begin && currentDateTime < sunrise:
        currentSkyColor = skyColors.dawn

      // Dusk: Between sunset and astro twighlight end
      case currentDateTime > sunset && currentDateTime < astro_twilight_end:
        currentSkyColor = skyColors.dusk

      // Day: Between sunrise and sunset
      case currentDateTime > sunrise && currentDateTime < sunset:
        currentSkyColor = skyColors.day

      default:
        currentSkyColor = skyColors.day

        console.log("HIT DEFAULT CASE - CUR SKY COLOR: \n", currentSkyColor)

        console.log("currentDateTime", currentDateTime.toString())
        console.log("sunrise", sunrise.toString())
        console.log("sunset", sunset.toString())

        console.log("currentDateTime > sunrise", currentDateTime > sunrise)
        console.log("currentDateTime < sunset", currentDateTime < sunset)



    }

    // console.log("astro twighlight begin", astro_twilight_begin)
    // console.log("astro twighlight end", astro_twilight_end)
    // console.log("sunrise", sunrise)
    // console.log("sunset", sunset)

    console.log("current sky color", currentSkyColor)

    return currentSkyColor
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