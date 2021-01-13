import React, { lazy, Suspense } from "react";
import "./SocialMediaSection.scss";
// import InstagramContainer from "../components/InstagramContainer";
import Fade from "react-reveal/Fade";
const YoutubeFrame = lazy(() => import("../components/YoutubeFrame"));
const InstagramContainer = lazy(() =>
  import("../components/InstagramContainer.js")
);

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
          <Suspense fallback={<p>Loading...</p>}>
            <InstagramContainer isMobile={isMobile} />
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
