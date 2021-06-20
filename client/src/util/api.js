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
