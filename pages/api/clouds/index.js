// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import skyColors from "./skyColors.json";


const LAT = 43.9140;
const LON = 69.9670;


export default async function handler(req, res) {

  const currentDate = new Date(); // capture date and time now
  const currentSkyColor = await getCurrentSkyColors(currentDate);

  res.status(200).json({ currentSkyColors: currentSkyColor })
}

/**
 * TODO - function getSkyColor(currentDateTime)
 * 1. Generate current date and time for request
 * 2. Call getSkyColors function, passing current date and time as an arg
 * 3. Look up appropriate sky colors for given time
 * 4. return sky colors in json
 */

async function getCurrentSkyColors(currentDateTime) {

  const sunTimes = await getSunTimes();


  console.log("orig sunset: ", sunTimes.sunset, "\norig sunrise: ", sunTimes.sunrise);

}


/**
 * function getSunTimes
 * 1. Reach out to sunrise/sunset api
 * 2. Retrieve said data in json (** times are in UTC **)
 */
async function getSunTimes() {

  try {
    const { data } = await axios.get(`https://api.sunrise-sunset.org/json?lat=${LAT}&lng=${LON}`);
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