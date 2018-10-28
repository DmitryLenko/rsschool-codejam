module.exports = function make(...value) {
    let arr = value;
    let carring = (...value) => {
      if(typeof value[0] === "function") {
          arr = arr.reduce((acc, item) => value[0](acc, item))
        return arr;
      }
      arr.push(...value);
      return carring;
    };
    return carring;
}