const request = require('request');  // use the request library

const breed = process.argv[2]; // grab the breed name from the node input.

//const findCat = function(breed, cb) {
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

request.get(url, (err,res,body) => {
    
  if (err) {
    console.log("error:", err);
  }

  const data = JSON.parse(body);

  if (data.length === 0) {
    console.log(`The breed ${breed} is not found`, null);

  } else {
    console.log(data[0].description);
  }
    
});

