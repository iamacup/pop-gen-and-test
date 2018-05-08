
module.exports = (generalStatus, statusCode, payload, res) => {
  
  let HTTPCode = 400;

  if(generalStatus === 'success') {
    HTTPCode = 200;
  } 

  res.status(HTTPCode).send({
    generalStatus,
    statusCode,
    payload,
  });

};
