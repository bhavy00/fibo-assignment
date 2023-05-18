import "./page.module.css";
import Swipeup from "./swipeup";

export default function Home() {
  return (
    <div>
      <div className="nav">
        <img
          src={require("../../public/images/icons8-share.svg").default}
          alt="shareIcon"
        ></img>
      </div>
      <div className="cover">
        <div className="info">
          <img
            src="../../public/images/polina-yUSpAw3wrQg-unsplash.jpg"
            alt="profileImage"
            className="profile"
          ></img>
          <div className="name">
            <h2>Bharadwaj Center</h2>
            <p>Food Influencer</p>
          </div>
        </div>
        <Swipeup />
      </div>
    </div>
  );
}
