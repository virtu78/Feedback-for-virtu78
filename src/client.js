//const { axios } = require("./fakeBackend/mock");

import axios from 'axios';
const getFeedbackByProductViewData = async (product, actualize = false) => {
let feedback;

  await axios.get('/api/feedback', {
    params: {
      product: product
    }
  })
    .then(response => {
      console.log(response);
feedback=response.data;

    }).catch (error => {
      console.log(error);
    });

return feedback;

};
export default getFeedbackByProductViewData;
//module.exports = { getFeedbackByProductViewData };
