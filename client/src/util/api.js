const { REACT_APP_API_HOME } = process.env;

export const getPosts = () =>
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
