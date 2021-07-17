const limitArray = async (ogArray, limit) => {
  const newArray = ogArray.slice(0, limit);

  return newArray;
};

module.exports = {
  limitArray,
};
