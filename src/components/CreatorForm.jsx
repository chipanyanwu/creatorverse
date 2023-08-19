import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { createCreator, loadCreator, updateCreator } from "../client.js"

import InstagramIcon from "../assets/instagram.svg"
import TwitterIcon from "../assets/twitter.svg"
import YoutubeIcon from "../assets/youtube.svg"
import TwitchIcon from "../assets/twitch.svg"

import "./CreatorForm.css"

export default function CreatorForm() {
    const navigate = useNavigate();
    let { creatorId } = useParams()

    let submitText = creatorId ? "Update Creator" : "Add Creator"

    let [currentData, setCurrentData] = useState()
    let [newData, setNewData] = useState({socials: {}})

    useEffect(() => {
        if (creatorId) {
            loadCreator(creatorId).then((data) => {
                // eslint-disable-next-line no-unused-vars
                const { created_at, id, ...essentialData } = data
                setCurrentData(essentialData)
                setNewData(essentialData)
            })
        }
    }, [creatorId])

    const updateNewData = (e) => {
        if (e.target.className == "social-handle") {
            setNewData({
                ...newData,
                socials: {...newData.socials, [e.target.name]: e.target.value}
            })
        } else {
            setNewData({
                ...newData,
                [e.target.name]: e.target.value
            })
        }
    }

    useEffect(() => console.log(newData), [newData])

    const submit = async (e) => {
        e.preventDefault()

        if (!Object.keys(newData.socials).length > 0) {
            alert("You must provide at least one social media for this creator")
        } else {
            if (creatorId) {
                updateCreator(creatorId, newData).then(() => navigate(`/creators/${creatorId}`))
            } else {
                createCreator(newData).then((newCreatorId) => navigate(`/creators/${newCreatorId}`))
            }
        }
    }

    return (
        <>
            {(creatorId == undefined || currentData) &&
                <form id="creator-form" onSubmit={submit}>
                    <label htmlFor="name">Name</label><br/>
                    <input onChange={updateNewData} defaultValue={currentData?.name} type="text" id="name" name="name" required/><br/>
        
                    <label htmlFor="image">Image</label><br/>
                    <input onChange={updateNewData} defaultValue={currentData?.imageURL} type="text" id="image" name="imageURL" required/><br/>
        
                    <label htmlFor="description">Description</label><br/>
                    <textarea onChange={updateNewData} defaultValue={currentData?.description} type="text" id="description" name="description" required/><br/>
        
                    <h3>Social Media Links</h3>
        
                    <label htmlFor="youtube">Youtube</label><br/>
                    <input className="social-handle" onChange={updateNewData} defaultValue={currentData?.socials.youtube} type="text" id="youtube" name="youtube"/><br/>
        
                    <label htmlFor="twitch">Twitch</label><br/>
                    <input className="social-handle" onChange={updateNewData} defaultValue={currentData?.socials.twitch} type="text" id="twitch" name="twitch"/><br/>
        
                    <label htmlFor="instagram">Instagram</label><br/>
                    <input className="social-handle" onChange={updateNewData} defaultValue={currentData?.socials.instagram} type="text" id="instagram" name="instagram"/><br/>
        
                    <label htmlFor="twitter">Twitter</label><br/>
                    <input className="social-handle" onChange={updateNewData} defaultValue={currentData?.socials.twitter} type="text" id="twitter" name="twitter" /><br/>
        
                    <br/>
                    <button type="submit">{submitText}</button>
                </form>
            }
        </>
    )
}
