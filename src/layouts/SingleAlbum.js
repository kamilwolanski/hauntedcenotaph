import React from "react";
import SongListEl from "../components/SongListEl";
import "./SingleAlbum.scss";
import { AiFillAmazonSquare } from "react-icons/ai";
import Fade from "react-reveal/Fade";

const SingleAlbum = ({ albumDate }) => {
  const {
    albumImg,
    albumName,
    releaseDate,
    albumSongList,
    linkFullAlbumAmazon,
  } = albumDate;
  return (
    <>
      <div className="overlay overlay-blured"></div>
      <section className="section-padding">
        <div className="wrapper">
          <div className="single-album">
            <Fade left>
              <div className="single-album__img">
                <img src={albumImg} alt="" />
              </div>
            </Fade>

            <Fade right>
              <div className="single-album__description">
                <div className="album-name">
                  <h3>{albumName}</h3>
                </div>
                <div className="single-album__release-date">
                  <p>Release date: {releaseDate}</p>
                </div>
                <ul className="single-album__list">
                  {albumSongList.map((listEl, idx) => {
                    return (
                      <SongListEl
                        key={idx}
                        song={listEl}
                        index={idx}
                        albumName={albumName}
                      />
                    );
                  })}
                </ul>
              </div>
            </Fade>
          </div>
          <Fade left>
            <div className="store-block">
              <p>Full album availble now on:</p>
              <ul className="storage-list">
                <a href={linkFullAlbumAmazon} target="_blank" rel="noreferrer">
                  <li>
                    <AiFillAmazonSquare /> <p>Amazon</p>
                  </li>
                </a>
              </ul>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default SingleAlbum;
