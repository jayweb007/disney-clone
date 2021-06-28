import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { selectMovies } from "../features/movie/movieSlice";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector(selectMovies);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies
          .filter((movie) => movie.type === "recommend")
          .map((filteredmovie) => (
            <Wrap key={filteredmovie.id}>
              <Link to={`/detail/${filteredmovie.id}`}>
                <img src={filteredmovie.cardImg} alt={filteredmovie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
      <h4 style={{ marginTop: 25 }}>New from Disney+</h4>
      <Content>
        {movies
          .filter((movie) => movie.type === "new")
          .map((filteredmovie) => (
            <Wrap key={filteredmovie.id}>
              <Link to={`/detail/${filteredmovie.id}`}>
                <img src={filteredmovie.cardImg} alt={filteredmovie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
      <h4 style={{ marginTop: 25 }}>Originals</h4>
      <Content>
        {movies
          .filter((movie) => movie.type === "originals")
          .map((filteredmovie) => (
            <Wrap key={filteredmovie.id}>
              <Link to={`/detail/${filteredmovie.id}`}>
                <img src={filteredmovie.cardImg} alt={filteredmovie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
      <h4 style={{ marginTop: 25 }}>Trending #Movies</h4>
      <Content>
        {movies
          .filter((movie) => movie.type === "trending")
          .map((filteredmovie) => (
            <Wrap key={filteredmovie.id}>
              <Link to={`/detail/${filteredmovie.id}`}>
                <img src={filteredmovie.cardImg} alt={filteredmovie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  margin-top: 20px;
`;

const Content = styled.div`
  margin-top: 25px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  border: 4px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 48px 58px -10px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  }
`;
