import React from "react";
import "./Homepage.css";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Mainpage from "../Mainpage/Mainpage";
import Navbar from "../../components/Navbar/Navbar";
export default function Homepage() {
  return (
    <div className="homepage">
      <Routes>
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
      <Navbar />
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
        <p>
          JojoTV is a safe site to watch anime, with only one ad to cover server
          costs and constant scanning to ensure that all ads are clean. If you
          find any suspicious ads, you can forward the information to JojoTV,
          and they will remove them.
        </p>
        <p>
          JojoTV stands out from other anime streaming sites because of its
          focus on safety, content library, quality/resolution, streaming
          experience, updates, user interface, device compatibility, and
          customer care. The site offers popular, classic, and current anime
          titles from all genres, including action, drama, kids, fantasy,
          horror, mystery, police, romance, school, comedy, music, game, and
          more. All titles come with English subtitles or are dubbed in multiple
          languages, and users can choose from various quality settings to
          ensure a smooth streaming experience.
        </p>
        <p>
          If you have trouble accessing JojoTV, you can try anix or gogoanime,
          JojoTV is committed to providing a trustworthy and safe site for anime
          streaming and offers excellent customer service. Give JojoTV a try and
          spread the word if you like it.
        </p>
        <h3>©2023 JojoTV. All rights reserved.</h3>
      </footer>
    </div>
  );
}
