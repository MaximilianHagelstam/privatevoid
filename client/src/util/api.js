export const getPosts = () =>
  fetch('http://localhost:8080/api/read-posts').then((res) => res.json());

export const createPost = (data) =>
  fetch('http://localhost:8080/api/create-post', {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(data),
  });

export const fetchUser = () => {
  const user = fetch('http://localhost:8080/api/current-user', {
    method: 'GET',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
    },
  });

  return user;
};
