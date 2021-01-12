import React from "react";
import "./AlbumSection.scss";
import MusicPlayer from "../components/MusicPlayer";
import Fade from "react-reveal/Fade";

const AlbumSection = () => {

  return (
    <>
      <section className="album section-padding">
        <div className="overlay"></div>
        <Fade bottom>
          <div className="heading-container">
            <h2 className="section-heading">Featured albums</h2>
          </div>
        </Fade>

        <Fade bottom>
          <div className="music-slider">
            <div className="wrapper">
              <MusicPlayer/>
            </div>
          </div>
        </Fade>
      </section>
    </>
  );
};

export default AlbumSection;
