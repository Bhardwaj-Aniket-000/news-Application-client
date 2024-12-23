import { useContext } from "react";
import NewsContext from "../contexts/NewsContext";

const useNewsData = () => {
  const {
    fetchData,
    // totalResults,
    // PageNumber,
    // setPageNumber,
    fetchMoreData,
    progress,
    newsSpinner,
  } = useContext(NewsContext);
  return {
    fetchData,
    // totalResults,
    // PageNumber,
    // setPageNumber,
    fetchMoreData,
    progress,
    newsSpinner,
  };
};
export default useNewsData;
