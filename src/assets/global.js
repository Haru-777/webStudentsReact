import axios from 'axios';

axios.get('http://localhost:3001/hello')
  .then(response => {
    console.log(response.data.message);
  })
  .catch(error => {
    console.error(error);
  });