import GameCard from "../components/basepage/GameCard"
import gameList from "../assets/games.json"

function BasePage() {
    
    return (
        <div>
            <h1>JavaScript Games</h1>
            <section style={{
                "display": "flex",
                "justifyContent": "center",
                "flexWrap": "wrap",
                "gap": 30,
            }}>
                {
                    Object.values(gameList).map((gameDetails) => {
                        return (
                            <GameCard gameDetails={gameDetails}/>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default BasePage