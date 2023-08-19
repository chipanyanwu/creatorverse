import { useState, useEffect } from "react";
import { loadAllCreators } from "../client.js"

import Card from "../components/Card";
import "./ShowCreators.css"

export default function ShowCreators() {
  let [creators, setCreators] = useState()

  useEffect(() => {
    loadAllCreators().then((data) => {
      setCreators(data)
    })
  }, [])
  useEffect(() => console.log(creators), [creators])

  return (
    <div className="card-container">
      {creators?.map((creator) => {
        return <Card key={creator.id} id={creator.id} name={creator.name} img={creator.imageURL} description={creator.description} socials={creator.socials}/>
      })}
    </div>
  )
}
