import React from "react";

const Third =()=>{
    return(
        <>
        <div className="master_play">
          <div className="wave">
            <div className="wave1" />
            <div className="wave1" />
            <div className="wave1" />
          </div>
          <img src="src/img/26th.jpg" alt="Alan" id="poster_master_play" />
          <h5 id="title">
            Vande Mataram
            <br />
            <div className="subtitle">Bankim Chandra</div>
          </h5>
          <div className="icon">
            <i className="bi bi-skip-start-fill" id="back" />
            <i className="bi bi-play-fill" id="masterPlay" />
            <i className="bi bi-skip-end-fill" id="next" />
          </div>
          <span id="currentStart">0:00</span>
          <div className="bar">
            <input type="range" id="seek" min={0} defaultValue={0} max={100} />
            <div className="bar2" id="bar2" />
            <div className="dot" />
          </div>
          <span id="currentEnd">0:00</span>
          <div className="vol">
            <i className="bi bi-volume-down-fill" id="vol_icon" />
            <input type="range" id="vol" min={0} defaultValue={30} max={100} />
            <div className="vol_bar" />
            <div className="dot" id="vol_dot" />
          </div>
        </div>
        </>
    )
}
export default Third