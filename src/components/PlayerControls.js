import React from "react";
import { BiPlayCircle, BiPauseCircle } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faBackward } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const PlayerControls = ({ isPlaying, setIsPlaying, skipSong }) => {
  return (
    <Fade>
      <div className="player--controls">
        <button className="skip-btn" onClick={() => skipSong(false)}>
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button
          className="play_button"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <BiPauseCircle /> : <BiPlayCircle />}
        </button>
        <button className="skip-btn" onClick={() => skipSong(true)}>
          <FontAwesomeIcon icon={faForward} />
        </button>
      </div>
    </Fade>
  );
};

export default PlayerControls;
