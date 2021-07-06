const { REACT_APP_API_HOME } = process.env;

export const fetchPosts = () =>
  fetch(`${REACT_APP_API_HOME}/posts/read-posts`).then((res) => res.json());

export const createPost = (data) =>
  fetch(`${REACT_APP_API_HOME}/posts/create-post`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(data),
  });

export const createComment = (data) =>
  fetch(`${REACT_APP_API_HOME}/comments/create-comment`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(data),
  });

export const fetchUser = () =>
  fetch(`${REACT_APP_API_HOME}/profile/current-user`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  });

export const fetchPostById = (postId) =>
  fetch(`${REACT_APP_API_HOME}/posts/read-post-by-id/${postId}`).then((res) =>
    res.json()
  );

export const fetchUserByUsername = (searchedUsername) =>
  fetch(
    `${REACT_APP_API_HOME}/profile/read-user-by-username/${searchedUsername}`
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return false;
    }
  });

export const fetchPostsByAuthorId = (authorId) =>
  fetch(`${REACT_APP_API_HOME}/posts/read-posts-by-authorId/${authorId}`).then(
    (res) => res.json()
  );

export const convertUsernameToId = (username) =>
  fetch(
    `${REACT_APP_API_HOME}/profile/find-userId-from-username/${username}`
  ).then((res) => res.json());

export const fetchCommentsByCreatorId = (creatorId) =>
  fetch(
    `${REACT_APP_API_HOME}/comments/read-comments-by-creatorId/${creatorId}`
  ).then((res) => res.json());

export const editSettings = (data) =>
  fetch(`${REACT_APP_API_HOME}/profile/update-settings`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(data),
  });

export const likePost = (data) =>
  fetch(`${REACT_APP_API_HOME}/likes/like-post`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(data),
  });

export const unLikePost = (data) =>
  fetch(`${REACT_APP_API_HOME}/likes/remove-like`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(data),
  });

export const checkLiked = (postId) =>
  fetch(`${REACT_APP_API_HOME}/likes/read-like-by-postId/${postId}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  }).then((res) => res.json());

export const fetchLikesByCreatorId = (creatorId) =>
  fetch(
    `${REACT_APP_API_HOME}/likes/read-likes-by-creatorId/${creatorId}`
  ).then((res) => res.json());

export const followUser = (data) =>
  fetch(`${REACT_APP_API_HOME}/follow/follow-user`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(data),
  });

export const unfollowUser = (data) =>
  fetch(`${REACT_APP_API_HOME}/follow/unfollow-user`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(data),
  });

export const checkFollowed = (userId) =>
  fetch(`${REACT_APP_API_HOME}/follow/read-follow-by-userId/${userId}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  }).then((res) => res.json());
