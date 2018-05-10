
module.exports = {
  getRandomArbitrary: (min, max) => Math.random() * ((max - min) + min),
  getRandomInt: (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min),
};
