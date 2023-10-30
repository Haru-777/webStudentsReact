import axios from 'axios';

axios.get(`${process.env.REACT_APP_BACKEND_URL}/hello`)
  .then(response => {
    console.log(response.data.message);
  })
  .catch(error => {
    console.error(error);
  });