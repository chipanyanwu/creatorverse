import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { createCreator, loadCreator, updateCreator } from "../client.js"

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
        <div className="creator-form-container">
            {(creatorId == undefined || currentData) &&
                <form id="creator-form" onSubmit={submit}>
                    <label htmlFor="name"><h2>Name</h2></label>
                    <input onChange={updateNewData} defaultValue={currentData?.name} type="text" id="name" name="name" required/>
        
                    <label htmlFor="image">
                        <h2>Image</h2>
                        <p>Provide a link to an image of your creator. Be sure to include the http://</p>
                    </label>
                    <input onChange={updateNewData} defaultValue={currentData?.imageURL} type="text" id="image" name="imageURL" required/>
        
                    <label htmlFor="description">
                        <h2>Description</h2>
                        <p>Provide a description of the creator. Who are they? What makes them interesting?</p>
                    </label>
                    <textarea onChange={updateNewData} defaultValue={currentData?.description} rows="4" type="text" id="description" name="description" required/>
        
                    <div className="section-header">
                        <h2>Social Media</h2>
                        <p>Provide at least one of the creator&apos;s social media handles.</p>
                    </div>
        
                    <label htmlFor="youtube">
                        <h2>Youtube</h2>
                        <p>The creator&apos;s YouTube handle (without the @)</p>
                    </label>
                    <input className="social-handle" onChange={updateNewData} defaultValue={currentData?.socials?.youtube} type="text" id="youtube" name="youtube"/>
        
                    <label htmlFor="twitch">
                        <h2>Twitch</h2>
                        <p>The creator&apos;s Twitch handle (without the @)</p>
                    </label>
                    <input className="social-handle" onChange={updateNewData} defaultValue={currentData?.socials?.twitch} type="text" id="twitch" name="twitch"/>
        
                    <label htmlFor="instagram">
                        <h2>Instagram</h2>
                        <p>The creator&apos;s Instagram handle (without the @)</p>
                    </label>
                    <input className="social-handle" onChange={updateNewData} defaultValue={currentData?.socials?.instagram} type="text" id="instagram" name="instagram"/>
        
                    <label htmlFor="twitter">
                        <h2>Twitter</h2>
                        <p>The creator&apos;s Twitter handle (without the @)</p>
                    </label>
                    <input className="social-handle" onChange={updateNewData} defaultValue={currentData?.socials?.twitter} type="text" id="twitter" name="twitter" />
        
                    <button type="submit">{submitText}</button>
                </form>
            }
        </div>
    )
}
