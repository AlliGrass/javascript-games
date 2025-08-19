

function GameCard({gameDetails}) {

    return (
        <div style={{
            "width": "450px",
            "backgroundColor": "teal",
            "border-radius": "10px",
            "padding": "30px",
            "paddingTop": "10px",
            "display": "flex",
            "flexDirection": "column",
        }}>
            <h2>{gameDetails.title}</h2>
            <img src={gameDetails.img_src} alt="" />
            <p>{gameDetails.description}</p>
            <button><a href={gameDetails.path}>Play</a></button>
        </div>
    )
}

export default GameCard