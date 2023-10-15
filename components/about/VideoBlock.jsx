import { useState } from "react";
import ModalVideo from "react-modal-video";

const VideoBlock = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="vimeo"
        autoplay="true"
        isOpen={isOpen}
        videoId="856125388"
        onClose={() => setOpen(false)}
      />

      <div className="fancy-feature-fiftyTwo mt-50 lg-mt-30">
        <div className="container">
          <div className="video-banner d-flex align-items-center justify-content-center">
            <button
              className="fancybox video-icon tran3s rounded-circle d-flex align-items-center justify-content-center"
              onClick={() => setOpen(true)}
            >
              <img
                src="/images/icon/icon_140.svg"
                alt="icon"
                className="lazy-img"
              />
            </button>
          </div>
          {/* /.video-banner */}
        </div>
      </div>
    </>
  );
};

export default VideoBlock;
