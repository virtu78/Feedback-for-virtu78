//const { axios } = require("./fakeBackend/mock");

import axios from 'axios';
const getFeedbackByProductViewData = async (product, actualize = false) => {

  await axios.get('/feedback', {
    params: {
      product: product
    }
  })
    .then((response) => {
      console.log(response);

    }, (error) => {
      console.log(error);
    });



};
export default getFeedbackByProductViewData;
