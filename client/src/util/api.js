const { REACT_APP_API_HOME } = process.env;

export const fetchPosts = () =>
  fetch(`${REACT_APP_API_HOME}/api/read-posts`).then((res) => res.json());

export const createPost = (data) =>
  fetch(`${REACT_APP_API_HOME}/api/create-post`, {
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
  fetch(`${REACT_APP_API_HOME}/api/create-comment`, {
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
  fetch(`${REACT_APP_API_HOME}/api/current-user`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  });

export const fetchPostById = (postId) =>
  fetch(`${REACT_APP_API_HOME}/api/read-post-by-id/${postId}`).then((res) =>
    res.json()
  );

export const fetchUserByUsername = (searchedUsername) =>
  fetch(
    `${REACT_APP_API_HOME}/api/read-user-by-username/${searchedUsername}`
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return false;
    }
  });

export const fetchPostsByAuthorId = (authorId) =>
  fetch(`${REACT_APP_API_HOME}/api/read-posts-by-authorId/${authorId}`).then(
    (res) => res.json()
  );

export const convertUsernameToId = (username) =>
  fetch(`${REACT_APP_API_HOME}/api/find-userId-from-username/${username}`).then(
    (res) => res.json()
  );

export const fetchCommentsByCreatorId = (creatorId) =>
  fetch(
    `${REACT_APP_API_HOME}/api/read-comments-by-creatorId/${creatorId}`
  ).then((res) => res.json());

export const editSettings = (data) =>
  fetch(`${REACT_APP_API_HOME}/api/update-settings`, {
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
  fetch(`${REACT_APP_API_HOME}/api/like-post`, {
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
  fetch(`${REACT_APP_API_HOME}/api/remove-like`, {
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
  fetch(`${REACT_APP_API_HOME}/api/read-like-by-postId/${postId}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  }).then((res) => res.json());

export const fetchLikesByCreatorId = (creatorId) =>
  fetch(`${REACT_APP_API_HOME}/api/read-likes-by-creatorId/${creatorId}`).then(
    (res) => res.json()
  );
