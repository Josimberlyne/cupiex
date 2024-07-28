const axios = require('axios'); // If you're using Node.js

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    console.log('Data:', response.data); // Log the data from the response
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function with the desired URL
fetchData('https://api.example.com/data');
