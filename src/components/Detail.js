import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    //Grab the movie info from DB:
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //save the movie database
          setMovie(doc.data());
        } else {
          //redirect to home page
        }
      });
  }, [id]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt={movie.title} />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt={movie.title} />
          </ImageTitle>
          <ButtonImg>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="Play" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="Trailer" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="GroupWatch" />
            </GroupWatchButton>
          </ButtonImg>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.5;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 25vh;
  // min-height: 200px
  width: 25vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ButtonImg = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0 24px;
  margin-right: 22px;
  cursor: pointer;
  font-size: 15px;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.7);
  color: rgb(249, 249, 249);
  border: 1px solid rgb(249, 249, 249);
  text-transform: UPPERCASE;
`;

const AddButton = styled.button`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 22px;
  border-radius: 50%;
  background-color: rgb(0, 0, 0, 0.7);
  border: 1px solid rgb(249, 249, 249);

  span {
    font-size: 25px;
    color: rgb(249, 249, 249);
  }

  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const GroupWatchButton = styled(AddButton)``;

const SubTitle = styled.div`
  font-size: 15px;
  color: rgb(249, 249, 249);
  min-height: 20px;
  margin-top: 20px;
`;

const Description = styled.div`
  font-size: 18px;
  line-height: 1.5;
  color: rgb(249, 249, 249);
  margin-top: 17px;
  font-weight: 400;
  width: 770px;
`;
