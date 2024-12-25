import { createContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const params = useParams();
  const [fetchData, setFetchData] = useState([]);
  // const [PageNumber, setPageNumber] = useState(1);
  const [totalResults, settotalResults] = useState();
  const [progress, setProgress] = useState();
  const [newsSpinner, setNewsSpinner] = useState(false);
  const pageNumberRef = useRef(1);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    setNewsSpinner(true);
    setProgress(10);
    setProgress(30);

    fetch(
      `https://newsapi.org/v2/everything?q=${
        params.newsTitle ?? "india"
      }&sortBy=publishedAt&apiKey=${process.env.API_KEY}&page=${
        pageNumberRef.current
      }`
    )
      .then((res) => {
        setProgress(50);
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setProgress(70);
        settotalResults(Math.ceil(res.totalResults / 100));
        setFetchData(res.articles);
        setProgress(100);
        setNewsSpinner(false);
      })
      .catch((err) => {
        setFetchData(null);
        setProgress(100);
        setNewsSpinner(false);
      });
  }, [params.newsTitle]);

  const fetchMoreData = () => {
    pageNumberRef.current = pageNumberRef.current + 1;
    fetch(
      `https://newsapi.org/v2/everything?q=${
        params.newsTitle ?? "india"
      }&sortBy=publishedAt&apiKey=${process.env.API_KEY}&page=${
        pageNumberRef.current
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFetchData(fetchData.concat(res.articles));
      })
      .catch((err) => {
        setFetchData(null);
      });
  };
  return (
    <>
      <NewsContext.Provider
        value={{
          fetchData,
          // PageNumber,
          // totalResults,
          // setPageNumber,
          fetchMoreData,
          progress,
          newsSpinner,
          inputValue,
          setInputValue,
        }}
      >
        {children}
      </NewsContext.Provider>
    </>
  );
};

export default NewsContext;
