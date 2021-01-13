import React, { lazy, Suspense } from "react";
import "./SocialMediaSection.scss";
import InstagramContainer from "../components/InstagramContainer";
import Fade from "react-reveal/Fade";
const YoutubeFrame = lazy(() => import("../components/YoutubeFrame"));

const SocialMediaSection = ({ isMobile }) => {
  return (
    <section className="social-media section-padding">
      <div className="wrapper">
        <div className="social-media-container">
          <div className="video-container">
            {!isMobile ? (
              <Fade left>
                <div className="heading-container">
                  <h1 className="section-heading">video</h1>
                </div>
                <div className="youtube-container">
                  <Suspense fallback={<p>Loading...</p>}>
                    <YoutubeFrame />
                  </Suspense>
                </div>
              </Fade>
            ) : (
              <>
                <div className="heading-container">
                  <h1 className="section-heading">video</h1>
                </div>
                <div className="youtube-container">
                  <Suspense fallback={<p>Loading...</p>}>
                    <YoutubeFrame />
                  </Suspense>
                </div>
              </>
            )}
          </div>

          <InstagramContainer isMobile={isMobile} />
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
