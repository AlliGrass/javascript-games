

function GameCard({gameDetails}) {

    return (
        <div style={{
            "width": "450px",
            "backgroundColor": "#D6C0B3",
            "border-radius": "10px",
            "padding": "30px",
            "paddingTop": "10px",
            "display": "flex",
            "flexDirection": "column",
        }}>
            <h2>{gameDetails.title}</h2>
            <img src={gameDetails.img_src} alt="" />
            <p>{gameDetails.description}</p>
            {gameDetails.complete ? (
                <a href={gameDetails.path} style={{alignSelf: "center"}}>
                    <button>Play</button>
                </a>
                ) : (
                <span style={{alignSelf: "center", opacity: 0.6, cursor: 'not-allowed'}}>
                    <button disabled>In Production</button>
                </span>
            )}
        </div>
    )
}

export default GameCard