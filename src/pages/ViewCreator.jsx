import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { loadCreator, deleteCreator } from "../client.js"

import EditIcon from "../assets/edit.svg"
import TrashIcon from "../assets/trash.svg"
import InstagramIcon from "../assets/instagram.svg"
import TwitterIcon from "../assets/twitter.svg"
import YoutubeIcon from "../assets/youtube.svg"
import TwitchIcon from "../assets/twitch.svg"

import "./ViewCreator.css"

export default function ViewCreator() {
  const { creatorId } = useParams()
  let [creator, setCreator] = useState()

  useEffect(() => {
    loadCreator(creatorId).then((data) => {
      setCreator(data)
    })
  }, [creatorId])

  return (
    <div className="container">
      <div className="header">
        <button className="edit-btn">
            <Link to={`/edit/${creator?.id}`}>
                <img src={EditIcon}/>
            </Link>
        </button>
        <button className="delete-btn">
            <Link to={`/`} onClick={() => deleteCreator(creatorId)}>
                <img src={TrashIcon}/>
            </Link>
        </button>
        <img className="hero-img" src={creator?.imageURL}/>
      </div>
      <div className="content">
        <div className="content-header">
          <h1 className="creator-name">
            {creator?.name}
            <div className="squiggle accent">&nbsp;</div>
          </h1>
          <div className="social-links">
            {creator?.socials?.youtube != null &&
              <Link to={`https://www.youtube.com/${creator?.socials?.youtube}`} target="_blank">
                <div className="social">
                  <img className="accent" src={YoutubeIcon}/>
                  <h3 className="handle">@{creator?.socials?.youtube}</h3>
                </div>
              </Link>
            }
            {creator?.socials?.twitch != null &&
              <Link to={`https://www.twitch.com/${creator?.socials?.twitch}`} target="_blank">
                <div className="social">
                  <img className="accent" src={TwitchIcon}/>
                  <h3 className="handle">@{creator?.socials?.twitch}</h3>
                </div>
              </Link>
            }
            {creator?.socials?.instagram != null &&
              <Link to={`https://www.instagram.com/${creator?.socials?.instagram}`} target="_blank">
                <div className="social">
                  <img className="accent" src={InstagramIcon}/>
                  <h3 className="handle">@{creator?.socials?.instagram}</h3>
                </div>
              </Link>
            }
            {creator?.socials?.twitter != null &&
              <Link to={`https://www.twitter.com/${creator?.socials?.twitter}`} target="_blank">
                <div className="social">
                  <img className="accent" src={TwitterIcon}/>
                  <h3 className="handle">@{creator?.socials?.twitter}</h3>
                </div>
              </Link>
            }  
          </div>
        </div>
        <div className="content-body">
          <h2 className="subtitle">Who is {creator?.name}?</h2>
          <p className="description">{creator?.description}</p>
        </div>
        {/* <div className="content-footer">

        </div> */}
      </div>
    </div>
  )
}
