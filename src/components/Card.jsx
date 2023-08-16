import "./Card.css"

export default function Card() {
  return (
    <div className="card">
        <button className="card-edit-btn">E</button>
        <img className="card-img" src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2023/08/07/16914411203676.jpg"/>
        <div className="card-content">
            <div className="card-header">
                <h2 className="creator-name">
                    <span className="fancy">Kai Cenat</span>
                </h2>
                <div className="card-socials">
                    <p>IG</p>
                    <p>X</p>
                    <p>YT</p>
                    <p>TT</p>
                    <p>TW</p>
                </div>
            </div>
            <div className="card-desc">
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </div>
        </div>
    </div>
  )
}
