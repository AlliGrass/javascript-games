import GameCard from "../components/basepage/GameCard"
import gameList from "../assets/games.json"

function BasePage() {
    
    return (
        <div>
            <h1>JavaScript Games</h1>
            <section>
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