import React, { useState, useRef, useEffect } from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import PlayerControls from "./PlayerControls";
import Fade from "react-reveal/Fade";

const Player = ({
  albums,
  album,
  imageIndex,
  idx,
  activeAlbum,
  setActiveAlbum,
}) => {
  const audioEl = useRef(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setisPlaying] = useState(false);
  const listEl = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  useEffect(() => {
    setActiveAlbum(albums[imageIndex]);
    audioEl.current.pause();
    setCurrentSongIndex(0);
    setisPlaying(false);
  }, [activeAlbum, imageIndex]);

  const skipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp++;

        if (temp > album.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = album.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div
      ref={listEl}
      className={
        idx === imageIndex
          ? `slide ${album.albumImageClass} activeSlide`
          : `slide ${album.albumImageClass}`
      }
    >
      <audio
        src={activeAlbum.songs[currentSongIndex].src}
        ref={audioEl}
      ></audio>

      <Fade>
        <div className="player-album-title">
          <h3 style={{ color: "white" }}>
            {album.songs[currentSongIndex].title}
          </h3>
          <h5>{album.title}</h5>
        </div>
      </Fade>

      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setisPlaying}
        skipSong={skipSong}
      />

      <Fade left>
        <div className="player--details">
          <a href={album.linkToShop} target="_blank" rel="noreferrer">
            <RiShoppingBasket2Line />
          </a>
        </div>
      </Fade>

      <div className="slide__overlay"></div>
    </div>
  );
};

export default Player;
