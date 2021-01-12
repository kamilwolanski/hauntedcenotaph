import React from "react";
import Album from "../components/Album";
import abyssalMenaceImg from "../img/3.jpg";
import hauntedCenopathImg from "../img/1.jpg";
import nightmaresFromBeyondImg from "../img/2.jpg";
import "./MusicSection.scss";
import Fade from "react-reveal/Fade";

export const ALBUMS_MUSIC_SECTION = [
  {
    albumName: "Abyssal Menace",
    releaseDate: "2020",
    albumImg: abyssalMenaceImg,
    link: "/abbysal-menace",
    linkFullAlbumAmazon:
      "https://www.amazon.com/Abyssal-Menace-Haunted-Cenotaph/dp/B08NFJ5SKJ/ref=sr_1_13?dchild=1&keywords=Haunted+Cenotaph&qid=1609767985&s=dmusic&search-type=ss&sr=1-13",
  },
  {
    albumName: "Haunted Cenopath",
    releaseDate: "2019",
    albumImg: hauntedCenopathImg,
    link: "/haunted-cenopath",
    linkFullAlbumAmazon:
      "https://www.amazon.com/Haunted-Cenotaph/dp/B08NGYC7ZV",
  },
  {
    albumName: "Nightmares from Beyond",
    releaseDate: "2018",
    albumImg: nightmaresFromBeyondImg,
    link: "/nightmares-from-beyond",
    linkFullAlbumAmazon:
      "https://www.amazon.com/Nightmares-Beyond-Haunted-Cenotaph/dp/B08NGZCHNY/ref=sr_1_10?dchild=1&keywords=Haunted+Cenotaph&qid=1609767969&s=dmusic&search-type=ss&sr=1-10",
  },
];
const MusicSection = () => {
  return (
    <>
      <div className="overlay overlay-blured"></div>

      <section className="section-padding">
        <div className="wrapper">
          <div className="albums-section margin-top">
            <div className="heading-container subpages-heading">
              <h2 className="section-heading">music</h2>
            </div>
            <Fade bottom>
              <div className="albums-grid">
                {ALBUMS_MUSIC_SECTION.map((album, idx) => (
                  <Album key={idx} album={album} />
                ))}
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default MusicSection;
