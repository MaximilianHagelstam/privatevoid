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

export const fetchCommentById = (commentId) =>
  fetch(`${REACT_APP_API_HOME}/api/read-comment-by-id/${commentId}`).then(
    (res) => res.json()
  );
