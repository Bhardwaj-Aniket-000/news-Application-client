import { createContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const sportsContext = createContext();

export const SportsProvider = ({ children }) => {
  const params = useParams();
  const [fetchData, setFetchData] = useState([]);
  const [techData, setTechData] = useState([]);
  // const [PageNumber, setPageNumber] = useState(1);
  // const [totalResults, settotalResults] = useState();
  const [progress, setProgress] = useState();
  const [spinner, setSpinner] = useState(false);
  const pageNumberRef = useRef(1);
  const pageNumberRef2 = useRef(1);

  useEffect(() => {
    setSpinner(true);
    setProgress(10);
    setProgress(30);
    fetch(
      `https://newsapi.org/v2/everything?q=${
        params.link ?? "sports"
      }&sortBy=publishedAt&apiKey=19a38ea771cb4a89bd0e0e69ddb9335b&language=en&page=${
        pageNumberRef.current
      }`
    )
      .then((res) => {
        setProgress(50);
        return res.json();
      })
      .then((res) => {
        setProgress(70);
        // settotalResults(Math.ceil(res.totalResults / 100));
        setFetchData(res.articles);
        setProgress(100);
        setSpinner(false);
      })
      .catch((err) => {
        setFetchData(null);
        setProgress(100);
        setSpinner(false);
      });
  }, [params.link]);

  useEffect(() => {
    setSpinner(true);
    setProgress(10);
    setProgress(30);

    fetch(
      `https://newsapi.org/v2/everything?q=${
        params.link ?? "tech"
      }&sortBy=publishedAt&apiKey=19a38ea771cb4a89bd0e0e69ddb9335b&language=en&page=${
        pageNumberRef.current
      }`
    )
      .then((res) => {
        setProgress(50);
        return res.json();
      })
      .then((res) => {
        setProgress(70);
        // settotalResults(Math.ceil(res.totalResults / 100));
        setTechData(res.articles);
        setProgress(100);
        setSpinner(false);
      })
      .catch((err) => {
        setTechData(null);
        setProgress(100);
        setSpinner(false);
      });
  }, [params.link]);

  const fetchMoreData = () => {
    pageNumberRef.current = pageNumberRef.current + 1;
    fetch(
      `https://newsapi.org/v2/everything?q=${
        params.link ?? "india"
      }&sortBy=publishedAt&apiKey=19a38ea771cb4a89bd0e0e69ddb9335b&page=${
        pageNumberRef.current
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFetchData(fetchData.concat(res.articles));
        console.log(fetchData.length);
      })
      .catch((err) => {
        setFetchData(null);
      });
  };

  const fetchtechData = () => {
    pageNumberRef2.current = pageNumberRef2.current + 1;

    fetch(
      `https://newsapi.org/v2/everything?q=${
        params.link ?? "tech"
      }&sortBy=publishedAt&apiKey=19a38ea771cb4a89bd0e0e69ddb9335b&page=${
        pageNumberRef2.current
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setTechData(techData.concat(res.articles));
        console.log(techData.length);
      })
      .catch((err) => {
        setTechData(null);
      });
  };

  return (
    <>
      <sportsContext.Provider
        value={{
          fetchData,
          // PageNumber,
          // totalResults,
          // setPageNumber,
          techData,
          progress,
          spinner,
          fetchMoreData,
          fetchtechData,
        }}
      >
        {children}
      </sportsContext.Provider>
    </>
  );
};

export default sportsContext;
