const sortMostLikedPosts = (ogArray, limit) => {
  const sortedArray = ogArray.sort((a, b) =>
    a.likes.length > b.likes.length ? -1 : 1
  );

  const slicedArray = sortedArray.slice(0, limit);

  return slicedArray;
};

module.exports = {
  sortMostLikedPosts,
};
