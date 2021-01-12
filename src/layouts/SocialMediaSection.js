import React from "react";
import "./SocialMediaSection.scss";
import InstagramContainer from "../components/InstagramContainer";
import Fade from "react-reveal/Fade";

const SocialMediaSection = () => {
  return (
    <section className="social-media section-padding">
      <div className="wrapper">
        <div className="social-media-container">
          <Fade left>
            <div className="video-container">
              <div className="heading-container">
                <h1 className="section-heading">video</h1>
              </div>
              <div className="youtube-container">
                <iframe
                  title="youtube"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/uKZfeQNh5BY"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Fade>
          <InstagramContainer />
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
