const sortMostLikedPosts = (ogArray) => {
  const newArray = ogArray.sort((a, b) =>
    a.likes.length > b.likes.length ? -1 : 1
  );

  return newArray;
};

module.exports = {
  sortMostLikedPosts,
};
