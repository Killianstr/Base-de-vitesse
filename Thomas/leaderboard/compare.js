const compare = (choice1) => {
  if (choice1 === "more") {
      return 3;
  } else if (choice1 === "less") {
      return -3;
  }
};

module.exports = compare;
