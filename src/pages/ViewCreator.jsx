import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { supabase } from "../client.js"

import EditIcon from "../assets/edit.svg"
import TrashIcon from "../assets/trash.svg"
import InfoIcon from "../assets/info.svg"
import InstagramIcon from "../assets/instagram.svg"
import TwitterIcon from "../assets/twitter.svg"
import YoutubeIcon from "../assets/youtube.svg"
import TwitchIcon from "../assets/twitch.svg"

import "./ViewCreator.css"

export default function ViewCreator() {
  let { creatorId } = useParams()
  let [creator, setCreator] = useState()

  useEffect(() => {
    const loadCreator = async () => {
      const res = await supabase.from("creators").select().eq('id', creatorId)
      setCreator(res?.data[0])
    }

    loadCreator()
  }, [creatorId])

  useEffect(() => console.log(creator), [creator])

  return (
    <div className="container">
      <div className="header">
        <button className="edit-btn">
            <Link to={`/edit/${creator?.id}`}>
                <img src={EditIcon}/>
            </Link>
        </button>
        <button className="delete-btn">
            <Link to={`/creators/${creator?.id}`}>
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
            <Link to="https://www.instagram.com/" target="_blank">
              <div className="social">
                <img className="accent" src={YoutubeIcon}/>
                <h3 className="handle">@{creator?.name}</h3>
              </div>
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <div className="social">
                <img className="accent" src={TwitchIcon}/>
                <h3 className="handle">@{creator?.name}</h3>
              </div>
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <div className="social">
                <img className="accent" src={InstagramIcon}/>
                <h3 className="handle">@{creator?.name}</h3>
              </div>
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <div className="social">
                <img className="accent" src={TwitterIcon}/>
                <h3 className="handle">@{creator?.name}</h3>
              </div>
            </Link>
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
