import React, { useState, useRef } from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import { HiOutlinePause } from "react-icons/hi2";
import { GrLinkNext } from "react-icons/gr";
import ProductList from "../ProductList/ProductList";

const Section = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div id="section">
      <div className="">
        <div className="bacction">
          <div className="container">
            <div className="top">
              <div className="left">
                <h3>
                  YEEZY BOOST 350 <br /> V2 STEEL GREY
                </h3>
                <button>
                  EXPLORE MORE <GrLinkNext />
                </button>
              </div>
              <div className="rigth"></div>
            </div>
          </div>
        </div>
        <div className="container1">
          <div className="section">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              style={{ 
                position: "relative",
                zIndex: "-1",
                width: "100%",
                height: "130vh",
                margin: "-60px 0 0 0",
              }}
              src="https://videos.adidas.com/video/upload/if_w_gt_1920,w_1920/running_ss24_supernova_global_launch_hp_masthead_d_2ddca3b2e2.mp4"
            ></video>
          </div>
            <div className="passigh">
              <div className="container">
                <div style={{
                  marginTop: "-300px",
                  zIndex: "1"
                }} className="value">
                  <h1>
                    SUPERCOMFORT. <br />
                    SUPERNOVA.
                  </h1>
                  <p>Experience maximum comfort with the new Supernova.</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <button className="valuesBtn">
                      SHOP MEN <GrLinkNext />
                    </button>
                    <button className="valuesBtn">
                      SHOP WOMEN <GrLinkNext />
                    </button>
                  </div>
                  <button className="btn-paus" onClick={togglePlayPause}>
                    {isPlaying ? <MdSlowMotionVideo /> : <HiOutlinePause />}
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
      <ProductList/>
    </div>
  );
};

export default Section;
