import React from "react";
import "./AlbumSection.scss";
import MusicPlayer from "../components/MusicPlayer";
import Fade from "react-reveal/Fade";

const AlbumSection = ({ isMobile }) => {
  return (
    <>
      <section className="album section-padding">
        <div className="overlay"></div>
        {!isMobile ? (
          <Fade bottom>
            <div className="heading-container">
              <h2 className="section-heading">Featured albums</h2>
            </div>
          </Fade>
        ) : (
          <div className="heading-container">
            <h2 className="section-heading">Featured albums</h2>
          </div>
        )}
        {!isMobile ? (
          <Fade bottom>
            <div className="music-slider">
              <div className="wrapper">
                <MusicPlayer />
              </div>
            </div>
          </Fade>
        ) : (
          <div className="music-slider">
            <div className="wrapper">
              <MusicPlayer />
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default AlbumSection;
