import { useState, useEffect } from "react";
import { supabase } from "../client.js"

import Card from "../components/Card";
import "./ShowCreators.css"

export default function ShowCreators() {
  let [creators, setCreators] = useState()

  const loadCreators = async () => {
    const res = await supabase.from("creators").select().order('created_at', { ascending: true })
    setCreators(res.data)
  }

  useEffect(() => loadCreators, [])
  useEffect(() => console.log(creators), [creators])

  return (
    <div className="card-container">
      {creators?.map((creator) => {
        return <Card key={creator.id} id={creator.id} name={creator.name} img={creator.imageURL} description={creator.description}/>
      })}
    </div>
  )
}
