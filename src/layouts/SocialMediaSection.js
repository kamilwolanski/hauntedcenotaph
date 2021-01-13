import React, { lazy, Suspense } from "react";
import "./SocialMediaSection.scss";
import InstagramContainer from "../components/InstagramContainer";
import Fade from "react-reveal/Fade";
const YoutubeFrame = lazy(()=> import("../components/YoutubeFrame"));

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
                <Suspense fallback={<p>Loading...</p>}>
                    <YoutubeFrame/>
                </Suspense>
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
