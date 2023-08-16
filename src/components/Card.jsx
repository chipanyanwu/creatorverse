import { Link } from "react-router-dom"

import EditIcon from "../assets/edit.svg"
import InstagramIcom from "../assets/instagram.svg"
import TwitterIcom from "../assets/twitter.svg"
import YoutubeIcom from "../assets/youtube.svg"
import TikTokIcon from "../assets/tiktok.svg"
import TwitchIcon from "../assets/twitch.svg"

import "./Card.css"

export default function Card() {
  return (
    <div className="card">
        <button className="card-edit-btn">
            <img src={EditIcon}/>
        </button>
        <img className="card-img" src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/08/07/16914411203676.jpg"/>
        <div className="card-content">
            <div className="card-header">
                <h2 className="creator-name">
                    <span className="fancy">Kai Cenat</span>
                </h2>
                <div className="card-socials">
                    <Link to="https://www.instagram.com/" target="_blank">
                        <img src={InstagramIcom}/>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank">
                        <img src={TwitterIcom}/>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank">
                        <img src={YoutubeIcom}/>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank">
                        <img src={TikTokIcon}/>
                    </Link>
                    <Link to="https://www.instagram.com/" target="_blank">
                        <img src={TwitchIcon}/>
                    </Link>
                </div>
            </div>
            <div className="card-desc">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptatem sunt voluptates optio minima. Excepturi fugiat voluptatibus rerum eaque, quod, corporis sunt deserunt ex dolor doloremque explicabo nesciunt, laboriosam voluptatum.</p>
            </div>
        </div>
    </div>
  )
}
