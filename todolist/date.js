// console.log(module);

exports.getDate = function() {
  let toDay = new Date();

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long"
  };

  return toDay.toLocaleDateString("en-PK", options);
};

exports.getDay = function() {
  let toDay = new Date();

  let options = {
    weekday: "long"
  };

  return toDay.toLocaleDateString("en-PK", options);
};
