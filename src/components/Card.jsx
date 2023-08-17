import { Link } from "react-router-dom"

import EditIcon from "../assets/edit.svg"
import InstagramIcom from "../assets/instagram.svg"
import TwitterIcom from "../assets/twitter.svg"
import YoutubeIcom from "../assets/youtube.svg"
import TikTokIcon from "../assets/tiktok.svg"
import TwitchIcon from "../assets/twitch.svg"

import "./Card.css"

export default function Card({ name, img, description, socials }) {
    return (
        <div className="card">
            <button className="card-edit-btn">
                <img className="accent" src={EditIcon}/>
            </button>
            <img className="card-img" src={img}/>
            <div className="card-content">
                <div className="card-header">
                    <h2 className="creator-name">
                        <span className="fancy">{name}</span>
                        <div className="squiggle accent"></div>
                    </h2>
                    <div className="card-socials">
                        <Link to="https://www.instagram.com/" target="_blank">
                            <img className="accent" src={InstagramIcom}/>
                        </Link>
                        <Link to="https://www.instagram.com/" target="_blank">
                            <img className="accent" src={TwitterIcom}/>
                        </Link>
                        <Link to="https://www.instagram.com/" target="_blank">
                            <img className="accent" src={YoutubeIcom}/>
                        </Link>
                        <Link to="https://www.instagram.com/" target="_blank">
                            <img className="accent" src={TikTokIcon}/>
                        </Link>
                        <Link to="https://www.instagram.com/" target="_blank">
                            <img className="accent" src={TwitchIcon}/>
                        </Link>
                    </div>
                </div>
                <div className="card-desc">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
