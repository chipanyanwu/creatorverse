import { Link } from "react-router-dom"

import EditIcon from "../assets/edit.svg"
import InfoIcon from "../assets/info.svg"
import InstagramIcon from "../assets/instagram.svg"
import TwitterIcon from "../assets/twitter.svg"
import YoutubeIcon from "../assets/youtube.svg"
import TwitchIcon from "../assets/twitch.svg"

import "./Card.css"

export default function Card({ id, name, img, description, socials }) {
    return (
        <div className="card">
            <button className="card-edit-btn">
                <Link to={`/edit/${id}`}>
                    <img src={EditIcon}/>
                </Link>
            </button>
            <button className="card-info-btn">
                <Link to={`/creators/${id}`}>
                    <img src={InfoIcon}/>
                </Link>
            </button>
            <Link to={`creators/${id}`}>
                <img className="card-img" src={img}/>
            </Link>
            <div className="card-content">
                <div className="card-header">
                    <h2 className="creator-name">
                        {name}
                        <div className="squiggle accent">&nbsp;</div>
                    </h2>
                    <div className="card-socials">
                        {socials?.youtube &&
                            <Link to={`https://www.youtube.com/${socials?.youtube}`} target="_blank">
                                <img className="accent" src={YoutubeIcon}/>
                            </Link>
                        }
                        {socials?.twitch &&
                            <Link to={`https://www.twitch.com/${socials?.twitch}`} target="_blank">
                                <img className="accent" src={TwitchIcon}/>
                            </Link>
                        }
                        {socials?.instagram &&
                            <Link to={`https://www.instagram.com/${socials?.instagram}`} target="_blank">
                                <img className="accent" src={InstagramIcon}/>
                            </Link>
                        }
                        {socials?.twitter &&
                            <Link to={`https://www.twitter.com/${socials?.twitter}`} target="_blank">
                                <img className="accent" src={TwitterIcon}/>
                            </Link>
                        }
                    </div>
                </div>
                <div className="card-desc">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
