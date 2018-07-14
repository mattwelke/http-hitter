const axios = require('axios');

let count = 0;
let totalDurMs = 0;

const URL = process.argv[2];
const INTERVAL_MS = process.argv[3];

console.log(`Starting with URL = ${URL}.`);

async function hit() {
  const t1 = Date.now();

  const response = await axios.get(URL);

  const durMs = Date.now() - t1;

  totalDurMs += durMs;

  count++;
  
  console.log(`#${count} - ${response.status} ${response.statusText} response in ${Date.now() - t1} ms. Avg response time = ${(totalDurMs / count).toFixed(0)} ms.`);
}  

setInterval(hit, INTERVAL_MS);
