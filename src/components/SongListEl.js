import React from "react";
import { FaBandcamp } from "react-icons/fa";
import { AiFillAmazonSquare } from "react-icons/ai";

const SongListEl = ({ song, index, albumName }) => {
  const { nameOfSong, linkToBandCamp, linkToAmazon } = song;

  const handleIconColor = () => {
      if(albumName === 'Abyssal Menace') {
        return 'blue-icons'
      }else if(albumName === 'Haunted Cenopath') {
          return 'red-icons'
      }else if(albumName === 'Nightmares from Beyond') {
          return 'grey-icons'
      }
  }
  return (
    <li>
      <p>
        {index + 1} {nameOfSong}
      </p>
      <div className="icons">
        <a href={linkToBandCamp} target="_blank" className={handleIconColor()} rel="noreferrer">
          <FaBandcamp />
        </a>
        <a href={linkToAmazon} target="_blank" className={handleIconColor()} rel="noreferrer">
          {linkToAmazon && <AiFillAmazonSquare />}
        </a>
      </div>
    </li>
  );
};

export default SongListEl;
