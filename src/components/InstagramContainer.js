import React, { useEffect, useState } from "react";
import InstagramService from "../api/InstagramService";
import ItemInstagramContainer from "./ItemInstagramContainer";
import Fade from "react-reveal/Fade";

const InstagramContainer = () => {
  const [instImg, setInstImg] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const search = async (size) => {
      try {
        const response = await InstagramService.GetPostsIds();
        const idsMedia = response.data.slice(0, size).map((item) => item.id);

        idsMedia.forEach(async (id) => {
          const response = await InstagramService.GetPhoto(id);
          setInstImg((instImg) => [
            ...instImg,
            { imgUrl: response.media_url, imgLink: response.permalink },
          ]);
        });
      } catch (ex) {
        setIsError(true);
      }
    };

    search(8);
  }, []);
  return (
    <Fade right>
      <div className="instagram-container">
        <div className="heading-container">
          <h2 className="section-heading">instagram</h2>
        </div>
        <div className="instagram">
          {isError ? 'Something went wrong. Try to refresh page to load content' :<div className="instagram-grid">
            {instImg.map((img, idx) => (
              <ItemInstagramContainer key={idx} url={img.imgUrl} link={img.imgLink} />
            ))}
          </div> }
          <a href="https://www.instagram.com/haunted_cenotaph/" target="_blank" rel="noreferrer">
            <p>follow us on instagram</p>
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default InstagramContainer;
