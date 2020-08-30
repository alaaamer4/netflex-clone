import React from "react";
import Row from "./components/Row";
import request from "./request";
import Banner from "./components/Banner";
const App = () => {
  return (
    <div>
      {/* navbar */}

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <Row
        title="NETFLEX ORIGINALS"
        fetchURL={request.fetchNetflexOriginals}
        isLarge
      />
      <Row title="TRENDING" fetchURL={request.fetchTrending} />
      <Row title="TOP RATED" fetchURL={request.fetchTopRated} />
      <Row title="ROMANCE MOVIES" fetchURL={request.fetchRomanceMovies} />
      <Row title="ACTION MOVIES" fetchURL={request.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchURL={request.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchURL={request.fetchHorrorMovies} />
      <Row title="DOCUMENTARY MOVIES" fetchURL={request.fetchDocumentaries} />
    </div>
  );
};

export default App;
