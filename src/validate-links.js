const axios = require('axios').default;

// function that validates the links https://stackoverflow.com/questions/31710768/how-can-i-fetch-an-array-of-urls-with-promise-all
const validateLinks = (links) => axios.get(links.href)
  .then((res) => {
    if (res.status >= 200 && res.status < 400) {
      return {
        ...links,
        status: res.status,
        message: res.statusText,
      };
    }
  })
  .catch((err) => {
    if (err.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      return {
        ...links,
        status: err.response.status,
        message: 'FAIL',
      };
    } else if (err.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      return {
        ...links,
        status: 'FAIL RESPONSE',
        message: 'FAIL',
      };
    }
  });

module.exports.validateLinks = validateLinks;
