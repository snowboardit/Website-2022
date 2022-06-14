// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import skyColors from "./skyColors.json";

export default function handler(req, res) {

  

  res.status(200).json({ skyColors: skyColors })
}

/**
 * TODO - function getSkyColors(currentDateTime)
 * 1. Generate current date and time for request
 * 2. Call getSkyColors function, passing current date and time as an arg
 * 3. Look up appropriate sky colors for given time
 * 4. return sky colors in json
 */