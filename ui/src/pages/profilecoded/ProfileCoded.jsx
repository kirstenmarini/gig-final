import "./profile.css";
import Topnav from "../../components/topnav/Topnav";
import Sidenav from "../../components/sidenav/Sidenav";
import Feed from "../../components/feed/Feed";

export default function ProfileCoded() {
  // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <>
      <Topnav />
      <div className="profile-container">
        <Sidenav />
        <div className="profile-content-wrapper">
          <div className="profile-content-top">
            <div className="profile-cover">
              <img
                className="profile-cover-img"
                src={
                  `http://localhost:3001/assets/person/display-banner.jpg`
                }
                alt="profile-banner"
              />
              <img
                className="profile-user-pfp"
                src={
                  `http://localhost:3001/assets/person/display-avatar.jpg`
                }
                alt="profile-dp"
              />
            </div>
            <div className="profile-info">
                <h4 className="profile-username">Kianna Zalameda</h4>
                <span className="profile-bio">3 BS ITE | Exercising once every three days!</span>
            </div>
          </div>
          <div className="profile-content">
            <Feed />
          </div>
        </div>
      </div>
    </>
  );
}
