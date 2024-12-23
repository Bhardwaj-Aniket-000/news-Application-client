import { useContext } from "react";
import sportsContext from "../contexts/SportsContext";

const useSportsData = () => {
  const {
    fetchData,
    // totalResults,
    // PageNumber,
    // setPageNumber,
    progress,
    techData,
    spinner,
    fetchMoreData,
    fetchtechData,
  } = useContext(sportsContext);
  return {
    fetchData,
    // totalResults,
    // PageNumber,
    // setPageNumber,
    progress,
    techData,
    spinner,
    fetchMoreData,
    fetchtechData,
  };
};
export default useSportsData;
