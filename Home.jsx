
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';

export default function Home(props) {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);

  // Fetch initial articles
  async function getAPIData() {
    setPage(1);
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${props.search || props.q}&language=${props.language}&pageSize=24&page=1&sortBy=publishedAt&apiKey=05a9bf3cad5d4a2fac2c57c17ab556de`
    );
    response = await response.json();
    if (response.status === 'ok') {
      setArticles(response.articles.filter((x) => x.title !== '[Removed]'));
      setTotalResults(response.totalResults);
    }
  }

  // Fetch more articles on scroll
  async function fetchData() {
    let nextPage = page + 1;
    setPage(nextPage);
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${props.search || props.q}&language=${props.language}&pageSize=24&page=${nextPage}&sortBy=publishedAt&apiKey=05a9bf3cad5d4a2fac2c57c17ab556de`
    );
    response = await response.json();
    if (response.status === 'ok') {
      setArticles((prevArticles) =>
        prevArticles.concat(response.articles.filter((x) => x.title !== '[Removed]'))
      );
    }
  }

  useEffect(() => {
    getAPIData();
  }, [props]);

  return (
    <div className="container-fluid">
      <h5 className="background text-light text-center p-2 mt-2 text-capitalize">
        {props.search || props.q} Articles
      </h5>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={
          <div className="my-5 text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      >
        <div className="row">
          {articles.map((item, index) => (
            <NewsItem
              key={index}
              source={item.source.name || 'N/A'}
              title={item.title}
              description={item.description}
              url={item.url}
              pic={item.urlToImage || '/Faiz/gz.png'}
              date={item.publishedAt}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

