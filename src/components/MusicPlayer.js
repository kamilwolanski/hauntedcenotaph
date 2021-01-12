import "./MusicPlayer.scss";
import React, { useState, useEffect, useRef} from "react";
import Slider from "react-slick";
import Player from "./Player";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const albums = [
  {
    title: "Haunter Cenopath",
    linkToShop: "https://www.amazon.com/Haunted-Cenotaph/dp/B08NGYC7ZV/ref=sr_1_2?dchild=1&keywords=Haunted+Cenotaph&qid=1610449523&s=dmusic&search-type=ss&sr=1-2",
    songs: [
      {
        title: "Haunted Cenotaph",
        src: "./music/Haunted Cenotaph.mp3",
      },
      {
        title: "Into the Realm of Thanatos",
        src: "./music/Into the Realm of Thanatos.mp3",
      },
      {
        title: "March of the Damned",
        src: "./music/March of the Damned.mp3",
      },
    ],
    albumImageClass: "one",
  },
  {
    title: "Nightmares from Beyond",
    linkToShop: 'https://www.amazon.com/Nightmares-Beyond-Haunted-Cenotaph/dp/B08NGZCHNY/ref=sr_1_16?dchild=1&keywords=Haunted+Cenotaph&qid=1610449819&s=dmusic&search-type=ss&sr=1-16',
    songs: [
      {
        title: "Nightmares from Beyond",
        src: "./music/Nightmares from Beyond.mp3",
      },
      {
        title: "Ritual of Evocation",
        src: "./music/Ritual of Evocation.mp3",
      },
    ],
    albumImageClass: "two",
  },
  {
    title: "Abyssal Menace",
    linkToShop: 'https://www.amazon.com/Abyssal-Menace-Haunted-Cenotaph/dp/B08NFJ5SKJ/ref=sr_1_11?dchild=1&keywords=Haunted+Cenotaph&qid=1610449855&s=dmusic&search-type=ss&sr=1-11',
    songs: [
      {
        title: "Abyssal Menace",
        src: "./music/Abyssal Menace.mp3",
      },
      {
        title: "Rotten Existence",
        src: "./music/Rotten Existence.mp3",
      },
    ],
    albumImageClass: "three",
  },
  {
    title: "Haunter Cenopath",
    linkToShop: 'https://www.amazon.com/Haunted-Cenotaph/dp/B08NGYC7ZV/ref=sr_1_2?dchild=1&keywords=Haunted+Cenotaph&qid=1610449897&s=dmusic&search-type=ss&sr=1-2',
    songs: [
      {
        title: "Haunted Cenotaph",
        src: "./music/Haunted Cenotaph.mp3",
      },
      {
        title: "Into the Realm of Thanatos",
        src: "./music/Into the Realm of Thanatos.mp3",
      },
      {
        title: "March of the Damned",
        src: "./music/March of the Damned.mp3",
      },
    ],
    albumImageClass: "one",
  },
  {
    title: "Nightmares from Beyond",
    linkToShop: 'https://www.amazon.com/Nightmares-Beyond-Haunted-Cenotaph/dp/B08NGZCHNY/ref=sr_1_16?dchild=1&keywords=Haunted+Cenotaph&qid=1610449911&s=dmusic&search-type=ss&sr=1-16',
    songs: [
      {
        title: "Nightmares from Beyond",
        src: "./music/Nightmares from Beyond.mp3",
      },
      {
        title: "Ritual of Evocation",
        src: "./music/Ritual of Evocation.mp3",
      },
    ],
    albumImageClass: "two",
  },
  {
    title: "Abyssal Menace",
    linkToShop: 'https://www.amazon.com/Abyssal-Menace-Haunted-Cenotaph/dp/B08NFJ5SKJ/ref=sr_1_11?dchild=1&keywords=Haunted+Cenotaph&qid=1610449855&s=dmusic&search-type=ss&sr=1-11',
    songs: [
      {
        title: "Abyssal Menace",
        src: "./music/Abyssal Menace.mp3",
      },
      {
        title: "Rotten Existence",
        src: "./music/Rotten Existence.mp3",
      },
    ],
    albumImageClass: "three",
  },
];

const MusicPlayer = ({location}) => {
  const nextArrowRef = useRef(null);
  const musicPlayerRef = useRef(null);

  const [imageIndex, setImageIndex] = useState(0);
  const [activeAlbum, setActiveAlbum] = useState(albums[imageIndex]);

  const handleKeyUp = (e) => {
    if (e.key === "ArrowRight") {
      musicPlayerRef.current.slickNext();
      // trzeba bedzie teraz zrobić wylaczanie nasluchiwania po kazdym razie
    }

    if (e.key === "ArrowLeft") {
      musicPlayerRef.current.slickPrev();
    }
  };

  useEffect(() => {
    // console.log(musicPlayerRef)

    window.addEventListener("keyup", handleKeyUp, true);
    return () => window.removeEventListener("keyup", handleKeyUp, true);
  }, []);

  // useEffect(() => {
  //   window.removeEventListener("keyup", handleKeyUp);
  // }, [window.location.pathname])

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick} ref={nextArrowRef}>
        <FaArrowRight />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const settings = {
    infinite: true,
    // accessibility: true,
    // focusOnSelect: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 848,
        settings: {
          slidesToShow: 1,
          // autoplay: true,
          // autoplaySpeed: 5000,
          //   arrows: false,
        },
      },
      {
        breakpoint: 1004,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className="music-player">
      <Slider {...settings} ref={musicPlayerRef}>
        {albums.map((album, idx) => (
          <Player
            key={idx}
            albums={albums}
            imageIndex={imageIndex}
            album={album}
            idx={idx}
            activeAlbum={activeAlbum}
            setActiveAlbum={setActiveAlbum}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MusicPlayer;
