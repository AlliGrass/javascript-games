

function GameCard({gameDetails}) {

    return (
        <div>
            <h2>{gameDetails.title}</h2>
            <img src={gameDetails.img_src} alt="" />
            <p>{gameDetails.description}</p>
            <button><a href={gameDetails.path}>Play</a></button>
        </div>
    )
}

export default GameCard