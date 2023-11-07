import React from "react";
import "./Homepage.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

export default function Homepage() {
  return (
    <div className="homepage">
      <header>
        <a href="#">Home</a>
        <a href="#">Trending</a>
        <a href="#">Hot</a>
      </header>
      <div className="afterheader">
        <div className="left">
          <img src="https://spikesite2-17132.kxcdn.com/wp-content/uploads/Logo_symbol_512x512_Trans.png?format=webp"></img>
          <p>
            Jojo TV is a free website for watching anime online that offers
            subbed or dubbed anime in ultra HD quality without any registration
            or payment. With over 1 billion monthly searches for anime related
            topics, it's no surprise that there has been a sharp rise in the
            number of free anime streaming sites. However, not all sites are
            created equal, which is why Jojo TV was created as one of the best
            free anime streaming sites for all anime fans worldwide
          </p>
        </div>
        <div className="right">
          <img src=""></img>
        </div>
      </div>
      <footer>
        <button className="viewfull">View Full Site</button>
      </footer>
    </div>
  );
}
