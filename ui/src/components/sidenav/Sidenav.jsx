import FeedIcon from "./icons/feed-icon.svg";
import SettingsIcon from "./icons/settings-icon.svg";
import Search from "./icons/search-icon.svg";

import './sidenav.css';
import { Link } from 'react-router-dom';

export default function Sidenav() {
  return (
    <div className="sidenav-container">
        <div className="sidenav-wrapper">
            <div className="searchbar">
                <img src={Search} id="search" alt="search"/>
                <input
                    placeholder="Search"
                    className="search-input"
                />
            </div>
            <div className="sidenav-links">
                <Link to="/" id="link-text">
                    <div className="sidenav-link">
                        <img src={FeedIcon} alt="" id="feed icon"/>
                        <p className="sidenav-text">Feed</p>
                    </div>
                </Link>
                <Link to="/profilecoded" id="link-text">
                    <div className="sidenav-link">
                        <img src={SettingsIcon} alt="" id="profile icon"/>
                        <p className="sidenav-text">Profile</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}
