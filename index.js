#!/usr/bin/nodejs

const axios = require('axios');

let count = 0;
const uri = process.argv[2];
console.log(`Starting with uri = ${uri}.`);
let timeBefore = undefined;
let timeAfter = undefined;

function hit() {
  timeBefore = new Date();

  axios.get(uri)
    .then(response => {
      count++;
      timeAfter = new Date();
      console.log(`#${count} - ${response.status} ${response.statusText} response in ${timeAfter - timeBefore} ms`);
      timeBefore = timeAfter;
      hit();
    });
}

hit();
