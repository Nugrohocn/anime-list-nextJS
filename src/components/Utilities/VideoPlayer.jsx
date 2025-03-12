"use client";

import { XCircle } from "@phosphor-icons/react";
import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeID }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-4 right-4 ">
        <button
          onClick={handleVideoPlayer}
          className="float-right mb-2 cursor-pointer"
        >
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={youtubeID}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
          onError={"Video is Broken"}
          className="rounded-xl"
        />
      </div>
    );
  };

  const ButtonOpenTrailer = () => {
    return (
      <button
        onClick={handleVideoPlayer}
        className="fixed bottom-5 right-5 w-32 bg-white text-black rounded-lg"
      >
        Tonton Trailer{" "}
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenTrailer />;
};

export default VideoPlayer;
