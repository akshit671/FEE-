import React from "react";

const Second =()=>{
    return(
        <>
        <div className="song_side">
          <nav>
            <ul>
              <li>
                Discover <span />
              </li>
              <li>MY LIBRARY</li>
              <li>RADIO</li>
            </ul>
            <div className="search">
              <i className="bi bi-search" />
              <input type="text" placeholder="Search Music..." />
            </div>
            <div className="user">
              <img src="src/logo.png" alt="User" title="Spotify (Chirag Nagar)" />
            </div>
          </nav>
          <div className="content">
            <h1>Alan Walker - Faded</h1>
            <p>
              So when your tears roll down your pillow like a river
              <br />
              I'll be there for you
            </p>
            <div className="buttons">
              <button>PLAY</button>
              <button>FOLLOW</button>
            </div>
          </div>
          <div className="popular_song">
            <div className="h4">
              <h4>Popular Song</h4>
              <div className="btn_s">
                <i id="left_scroll" className="bi bi-arrow-left-short" />
                <i id="right_scroll" className="bi bi-arrow-right-short" />
              </div>
            </div>
            <div className="pop_song">
              <li className="songItem">
                <div className="img_play">
                  <img src="src/img/1.jpg" alt="alan" />
                  <i className="bi playListPlay bi-play-circle-fill" id={7} />
                </div>
                <h5>
                  On My Way
                  <br />
                  <div className="subtitle">Alan Walker</div>
                </h5>
              </li>
              <li className="songItem">
                <div className="img_play">
                  <img src="src/img/1.jpg" alt="alan" />
                  <i className="bi playListPlay bi-play-circle-fill" id={8} />
                  {/* change All id  */}
                </div>
                <h5>
                  On My Way
                  <br />
                  <div className="subtitle">Alan Walker</div>
                </h5>
              </li>
              <li className="songItem">
                <div className="img_play">
                  <img src="src/img/1.jpg" alt="alan" />
                  <i className="bi playListPlay bi-play-circle-fill" id={9} />
                </div>
                <h5>
                  On My Way
                  <br />
                  <div className="subtitle">Alan Walker</div>
                </h5>
              </li>
              <li className="songItem">
                <div className="img_play">
                  <img src="src/img/1.jpg" alt="alan" />
                  <i className="bi playListPlay bi-play-circle-fill" id={10} />
                </div>
                <h5>
                  On My Way
                  <br />
                  <div className="subtitle">Alan Walker</div>
                </h5>
              </li>
              <li className="songItem">
                <div className="img_play">
                  <img src="src/img/1.jpg" alt="alan" />
                  <i className="bi playListPlay bi-play-circle-fill" id={11} />
                </div>
                <h5>
                  On My Way
                  <br />
                  <div className="subtitle">Alan Walker</div>
                </h5>
              </li>
              <li className="songItem">
                <div className="img_play">
                  <img src="src/img/1.jpg" alt="alan" />
                  <i className="bi playListPlay bi-play-circle-fill" id={12} />
                </div>
                <h5>
                  On My Way
                  <br />
                  <div className="subtitle">Alan Walker</div>
                </h5>
              </li>
              <li className="songItem">
                <div className="img_play">
                  <img src="src/img/1.jpg" alt="alan" />
                  <i className="bi playListPlay bi-play-circle-fill" id={13} />
                </div>
                <h5>
                  On My Way
                  <br />
                  <div className="subtitle">Alan Walker</div>
                </h5>
              </li>
              <li className="songItem">
                <div className="img_play">
                  <img src="src/img/1.jpg" alt="alan" />
                  <i className="bi playListPlay bi-play-circle-fill" id={14} />
                </div>
                <h5>
                  On My Way
                  <br />
                  <div className="subtitle">Alan Walker</div>
                </h5>
              </li>
              <li className="songItem">
                <div className="img_play">
                  <img src="src/img/1.jpg" alt="alan" />
                  <i className="bi playListPlay bi-play-circle-fill" id={15} />
                </div>
                <h5>
                  On My Way
                  <br />
                  <div className="subtitle">Alan Walker</div>
                </h5>
              </li>
            </div>
          </div>
          <div className="popular_artists">
            <div className="h4">
              <h4>Popular Artists</h4>
              <div className="btn_s">
                <i id="left_scrolls" className="bi bi-arrow-left-short" />
                <i id="right_scrolls" className="bi bi-arrow-right-short" />
              </div>
            </div>
            <div className="item">
              <li>
                <img src="src/img/arjit.jpg" alt="Arjit Singh" title="Arjit Singh" />
              </li>
              <li>
                <img src="src/img/alan.jpg" alt="Alan Walker" title="Alan Walker" />
              </li>
              <li>
                <img src="src/img/atif.jpg" alt="Atif Aslam" title="Atif Aslam" />
              </li>
              <li>
                <img src="src/img/guru.jpg" alt="Guru RAndawa" title="Guru Randawa" />
              </li>
              <li>
                <img src="src/img/dhvani.jpg" alt="Dhvani" title="Dhvani" />
              </li>
              <li>
                <img
                  src="src/img/Diljit_Dosanjh.jpg"
                  alt="Diljit Dosanjh"
                  title="Diljit Dosanjh"
                />
              </li>
              <li>
                <img
                  src="src/img/jubin Nautiyal.jpg"
                  alt="Jubin Nautiyal"
                  title="Jubin Nautiyal"
                />
              </li>
              <li>
                <img src="src/img/neha.jpg" alt="Neha Kakker" title="Neha Kakker" />
              </li>
              <li>
                <img
                  src="src/img/justin-bieber-lede.jpg"
                  alt="Justin Bieber"
                  title="Justin Bieber"
                />
              </li>
              <li>
                <img src="src/img/honey.jpg" alt="Honey Singh" title="Honey Singh" />
              </li>
              <li>
                <img src="src/img/akhil.jpg" alt="Akhil" title="Akhil" />
              </li>
              {/* change all img  */}
            </div>
          </div>
        </div>
        </>
    )
}
export default Second