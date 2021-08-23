const request = require('request');  // use the request library

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error,res,body) => {
    
    if (error) {
      callback(error, null);
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback(`The breed ${breedName} is not found`, null);

    } else {
      callback(null, data[0].description);
    }
    
  });

};

module.exports = { fetchBreedDescription };

