import React from "react";

const First =()=>{
    return(
        
        <div className="menu_side">
          <h1>Spotify</h1>
          <div className="playlist">
            <h4 className="active">
              <span />
              <i className="bi bi-music-note-beamed" /> Playlist
            </h4>
            <h4>
              <span />
              <i className="bi bi-music-note-beamed" /> Last Listening
            </h4>
            <h4>
              <span />
              <i className="bi bi-music-note-beamed" /> Recommended
            </h4>
          </div>
          <div className="menu_song">
            <li className="songItem">
              <span>01</span>
              <img src="src/img/1.jpg" alt="Alan" />
              <h5>
                On My Way
                <div className="subtitle">Alan Walker</div>
              </h5>
              <i className="bi playListPlay bi-play-circle-fill" id={1} />
            </li>
            <li className="songItem">
              <span>02</span>
              <img src="src/img/1.jpg" alt="Alan" />
              <h5>
                On My Way
                <div className="subtitle">Alan Walker</div>
              </h5>
              <i className="bi playListPlay bi-play-circle-fill" id={2} />
            </li>
            <li className="songItem">
              <span>03</span>
              <img src="src/img/1.jpg" alt="Alan" />
              <h5>
                On My Way
                <div className="subtitle">Alan Walker</div>
              </h5>
              <i className="bi playListPlay bi-play-circle-fill" id={3} />
            </li>
            <li className="songItem">
              <span>04</span>
              <img src="src/img/1.jpg" alt="Alan" />
              <h5>
                On My Way
                <div className="subtitle">Alan Walker</div>
              </h5>
              <i className="bi playListPlay bi-play-circle-fill" id={4} />
            </li>
            <li className="songItem">
              <span>05</span>
              <img src="src/img/1.jpg" alt="Alan" />
              <h5>
                On My Way
                <div className="subtitle">Alan Walker</div>
              </h5>
              <i className="bi playListPlay bi-play-circle-fill" id={5} />
            </li>
            <li className="songItem">
              <span>06</span>
              <img src="src/img/1.jpg" alt="Alan" />
              <h5>
                On My Way
                <div className="subtitle">Alan Walker</div>
              </h5>
              <i className="bi playListPlay bi-play-circle-fill" id={6} />
            </li>
          </div>
        </div>
        
        
     
    )
}
export default First