const { axios } = require("./fakeBackend/mock");

const getFeedbackByProductViewData = async (product, actualize = false) => {
  let feedback;
  await axios.get('/feedback', {
    params: {
      product: product
    }
  })
    .then((response) => {
      console.log(response);
      feedback = response.data;
    }, (error) => {
      console.log(error);
    });
  return feedback;


};
module.exports = { getFeedbackByProductViewData };
