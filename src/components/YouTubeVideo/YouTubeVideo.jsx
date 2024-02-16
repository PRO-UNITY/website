/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Video from "../ProductsVideo/Video";

const YouTubeVideo = ({ videoUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoUrl,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });
    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  return (
    <div className="product-video">
      <button
        onClick={toggleModal}
        className=" btn-danger btn-youtube   mx-auto mb-4 "
      >
        <i className="fa-solid fa-play text-light fs-4" />
      </button>
      {modalOpen && (
        <div className="modal-overlay active" onClick={toggleModal}>
          <button className="btn  modal-close" onClick={toggleModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div
            className="modal-content active"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="video-container">
              <Video options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeVideo;
