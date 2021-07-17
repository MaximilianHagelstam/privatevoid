const sortMostFollowedUsers = (ogArray, limit) => {
  const sortedArray = ogArray.sort((a, b) =>
    a.followers.length > b.followers.length ? -1 : 1
  );

  const slicedArray = sortedArray.slice(0, limit);

  return slicedArray;
};

module.exports = {
  sortMostFollowedUsers,
};
