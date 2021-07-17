const sortMostFollowedUsers = (ogArray) => {
  const newArray = ogArray.sort((a, b) =>
    a.followers.length > b.followers.length ? -1 : 1
  );

  return newArray;
};

module.exports = {
  sortMostFollowedUsers,
};
