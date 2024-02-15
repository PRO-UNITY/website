import { useRef, useState } from "react";
import "./ProductsVideo.css";
import Video from "./Video";

const ProductsVideo = () => {
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
        src: "/src/assets/images/153976-806571973 (1080p).mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <div className="product-video">
      <div className="btn-box" onClick={toggleModal}>
        <i className="fa-solid fa-play play-btn"></i>
      </div>
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

export default ProductsVideo;
