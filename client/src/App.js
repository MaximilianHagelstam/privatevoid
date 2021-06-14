import React from 'react';
import { AppRouter } from './AppRouter';
// import axios from 'axios';

// const fetchData = () => {
//   return axios
//     .get('http://localhost:8080/api/show')
//     .then((res) => {
//       const { data } = res;
//       console.log(data);
//       return data;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// };

export default function App() {
  // const [articles, setArticles] = useState([]);

  // useEffect(() => {
  //   fetchData().then((articles) => {
  //     setArticles(articles);
  //   });
  // }, []);

  return (
    // <div className="App">
    //   <h1>Articles</h1>
    //   {articles.map((article, articleIdx) => (
    //     <div key={articleIdx}>
    //       {article.title} - {article.description}
    //     </div>
    //   ))}
    // </div>
    <AppRouter />
  );
}
