const axios = require('axios');
const { performance } = require('perf_hooks');

let count = 0;
let totalDurMs = 0;

const URL = process.argv[2];
const INTERVAL_MS = +process.argv[3];

console.log(`Starting with:`);
console.log(`URL = ${URL}`);
console.log(`Interval (ms) = ${INTERVAL_MS}`);

async function hit() {
    try {
        const t1 = performance.now();

        const response = await axios.get(URL, {
            headers: {
                'Host': 'helloworld-go.default.example.com',
            },
        });

        const durMs = performance.now() - t1;

        totalDurMs += durMs;

        count++;

        console.log(`#${count} - ${response.status} ${response.statusText} response in ${durMs.toFixed(0)} ms. Avg response time = ${(totalDurMs / count).toFixed(0)} ms.`);
    } catch (e) {
        console.error(`Error:`);
        console.error(e);
    }

}

setInterval(hit, INTERVAL_MS);
