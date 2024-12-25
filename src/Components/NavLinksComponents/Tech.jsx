import React from "react";
import NewsCard from "../NewsCard";
import HomeShimmerEffect from "../ShimmerEffect";
import No_Internet from "../No_Internet";
import { NavLink } from "react-router-dom";
// import NavigateBtn from "../NavigateBtn";
import useSportsData from "../../../hooks/useSportsData";
import LoadingBar from "react-top-loading-bar";
import spinnerImg from "../../../assets/feedback/dualring.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import useNewsData from "../../../hooks/useNewsData";

const Tech = () => {
  const {
    techData,
    // totalResults,
    // PageNumber,
    // setPageNumber,
    progress,
    spinner,
    fetchtechData,
  } = useSportsData();
  const { inputValue } = useNewsData();

  // const handleNextNavigate = () => {
  //   if (PageNumber == totalResults) {
  //   } else {
  //     setPageNumber(PageNumber + 1);
  //   }
  // };
  // const handlePrevNavigate = () => {
  //   if (PageNumber > 1) {
  //     setPageNumber(PageNumber - 1);
  //   }
  // };

  const style = {
    position: "absolute",
    background: "red",
  };

  return (
    <>
      <LoadingBar style={style} progress={progress} />
      <div className="other-links">
        <li>
          <NavLink
            to="/tech/google"
            className={({ isActive }) => {
              if (isActive) {
                return "is_Active";
              }
            }}
          >
            google
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tech/microsoft"
            className={({ isActive }) => {
              if (isActive) {
                return "is_Active";
              }
            }}
          >
            microsoft
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tech/AI"
            className={({ isActive }) => {
              if (isActive) {
                return "is_Active";
              }
            }}
          >
            AI
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tech/science"
            className={({ isActive }) => {
              if (isActive) {
                return "is_Active";
              }
            }}
          >
            Science
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tech/NASA"
            className={({ isActive }) => {
              if (isActive) {
                return "is_Active";
              }
            }}
          >
            Nasa
          </NavLink>
        </li>
      </div>
      {spinner && (
        <img
          src={spinnerImg}
          alt="loading spinner"
          className="w-8 block mx-auto"
        />
      )}
      {!techData ? (
        <No_Internet />
      ) : (
        <InfiniteScroll
          dataLength={techData.length}
          next={fetchtechData}
          hasMore={techData.length != 500}
          loader={
            <img
              src={spinnerImg}
              alt="loading spinner"
              className="w-8 blcok mx-auto my-2"
            />
          }
        >
          <div className="card_container">
            {techData.length == 0 ? (
              <HomeShimmerEffect />
            ) : (
              techData
                .filter((news) => news.title.toString().includes(inputValue))
                .map((item, ind) => {
                  if (ind != 99) {
                    return (
                      <NewsCard
                        img={item.urlToImage}
                        title={item.title}
                        snippet={item.description}
                        date={item.publishedAt}
                        key={ind}
                        favicon={item.source.name}
                        source={item.url}
                      />
                    );
                  }
                })
            )}
          </div>
        </InfiniteScroll>
      )}

      {/* // {techData == null ? (
      //   ""
      // ) : (
      //   <NavigateBtn
      //     handleNextNavigate={handleNextNavigate}
      //     handlePrevNavigate={handlePrevNavigate}
      //     currentPage={PageNumber}
      //     totalPage={totalResults}
      //   />
      // )} */}
    </>
  );
};

export default Tech;
