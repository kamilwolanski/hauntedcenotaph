import React from "react";
import { Link } from "react-router-dom";

const Album = ({ album }) => {
  const { albumName, releaseDate, albumImg, link } = album;
  console.log(link);
  return (
    <div className="album">
      <Link to={`/music${link}`}>
        <div className="album__img">
          <img src={albumImg} alt="" />
        </div>
        <div className="album__description">
          <h3 className="album__description__name">{albumName}</h3>
          <p className="album__description__release-date">
            Release Date: {releaseDate}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Album;
