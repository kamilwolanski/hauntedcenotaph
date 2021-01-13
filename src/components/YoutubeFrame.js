import React from "react";

const YoutubeFrame = () => {
  return (
    <iframe
      title="youtube"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/uKZfeQNh5BY"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeFrame;