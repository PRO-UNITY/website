import { useState } from "react";
import "./YouTubePreview.css";

const YouTubePreview = () => {
  const [showModal, setshowModal] = useState(false);
  const handleModal = () => {
    setshowModal((prev) => !prev);
  };
  return (
    <div className="you-tube-preview">
      <div className="play-btn-wrapp" onClick={handleModal}>
        <button className=" btn play-btn">
          <i className="fa-solid fa-play"></i>
        </button>
      </div>
      {showModal && (
        <div className="you-tube-preview-wrapp">
          <div className="overlay" onClick={handleModal}></div>
          <div className="container">
            <iframe
              src="https://www.youtube.com/embed/_voQ5MGXX3g"
              title="ProUnity IT maktabining ochilish marosimi #ITmaktab"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubePreview;
