import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row rowID='2' title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID='3' title="Popular Trending" fetchURL={requests.requestPopulaTrending} />
      <Row rowID='4' title="Horror" fetchURL={requests.requestHorror} />
      <Row rowID='5' title="Top Rated" fetchURL={requests.requestTopRated} />
    </div>
  );
};

export default Home;
