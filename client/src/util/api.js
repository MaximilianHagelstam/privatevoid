export const getArticles = () =>
  fetch('http://localhost:8080/api/show').then((res) => res.json());

export const addArticle = (data) =>
  fetch('http://localhost:8080/api/add', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

export const fetchUser = () => {
  const user = fetch('http://localhost:8080/auth/user', {
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
