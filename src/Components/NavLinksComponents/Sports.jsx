import React from "react";
import NewsCard from "../NewsCard";
import ShimmerEffect from "../ShimmerEffect";
import { NavLink } from "react-router-dom";
import No_Internet from "../No_Internet";
// import NavigateBtn from "../NavigateBtn";
import useSportsData from "../../../hooks/useSportsData";
import LoadingBar from "react-top-loading-bar";
import spinnerImg from "../../../assets/feedback/dualring.svg";
import InfiniteScroll from "react-infinite-scroll-component";
import useNewsData from "../../../hooks/useNewsData";

function CardApidata() {
  const { fetchData, progress, spinner, fetchMoreData } =
    useSportsData();
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
            to="/sports/cricket"
            className={({ isActive }) => {
              if (isActive) {
                return "is_Active";
              }
            }}
          >
            cricket
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sports/football"
            className={({ isActive }) => {
              if (isActive) {
                return "is_Active";
              }
            }}
          >
            football
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sports/badminton"
            className={({ isActive }) => {
              if (isActive) {
                return "is_Active";
              }
            }}
          >
            badminton
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sports/ipl"
            className={({ isActive }) => {
              if (isActive) {
                return "is_Active";
              }
            }}
          >
            ipl
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sports/tennis"
            className={({ isActive }) => {
              if (isActive) {
                return "is_Active";
              }
            }}
          >
            tennis
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sports/wwe"
            className={({ isActive }) => {
              if (isActive) {
                return "is_Active";
              }
            }}
          >
            WWE
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

      {!fetchData ? (
        <No_Internet />
      ) : (
        <InfiniteScroll
          dataLength={fetchData.length}
          next={fetchMoreData}
          hasMore={fetchData.length < 400}
          loader={
            <img
              src={spinnerImg}
              alt="loading spinner"
              className="w-8 blcok mx-auto my-2"
            />
          }
        >
          <div className="card_container">
            {fetchData.length == 0 ? (
              <ShimmerEffect />
            ) : (
              fetchData
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
      {/* {!fetchData ? (
        ""
      ) : (
        <NavigateBtn
          handleNextNavigate={handleNextNavigate}
          handlePrevNavigate={handlePrevNavigate}
          currentPage={PageNumber}
          totalPage={totalResults}
        />
      )} */}
    </>
  );
}

export default CardApidata;
