import React from "react";
import NewsCard from "./NewsCard";
import HomeShimmerEffect from "./ShimmerEffect";
import No_Internet from "./No_Internet";
// import NavigateBtn from "./NavigateBtn";
import useNewsData from "../../hooks/useNewsData";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";
import spinnerImg from "../../assets/feedback/dualring.svg";

function CardApidata() {
  const { fetchData, fetchMoreData, progress, newsSpinner, inputValue } =
    useNewsData();
  const style = {
    position: "absolute",
    background: "red",
  };

  return (
    <>
      {/* {
        <input
          type="text"
          id="search"
          placeholder="Serach Any Headlines"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      } */}
      <LoadingBar style={style} progress={progress} />
      {newsSpinner && (
        <img
          src={spinnerImg}
          alt="loading spinner"
          className="w-8 block mx-auto mt-2"
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
              <HomeShimmerEffect />
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
      {/* {fetchData == null ? (
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
