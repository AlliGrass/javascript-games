import { useState } from "react"
import MastermindRow from "../components/mastermind/MastermindRow"


function Mastermind() {
    const colourList = ["blue", "red", "green", "yellow"]
    const [solution, setSolution] = useState(Array(4).fill().map(() => (colourList[Math.floor(Math.random()*colourList.length)])))
    const [activeRow, setActiveRow] = useState(0)
    const [currentAttempt, setCurrentAttempt] = useState()
    const [attemptFeedback, setAttemptFeedback] = useState(Array(8).fill(["","","",""]))


    const checkSolution = () => {
        const checkingSolution = [...solution]
        const correctPegs = currentAttempt.map((colour, index) => {
            if (checkingSolution[index] == colour) {
                checkingSolution[index] = ""
                return "green"
            }
            return
        })
        if (currentAttempt.map((colour, index) => (colour == solution[index])).every((currentColour) => currentColour == true)) console.log("WINNING")
        const finalFeedback = currentAttempt.map((colour, index) => {
            if (correctPegs[index] === "green") return "green"
            const solutionColourIndex = checkingSolution.indexOf(colour)
            if (solutionColourIndex == -1) return "red"
            checkingSolution[solutionColourIndex] = ""
            return "yellow"
        })

        setAttemptFeedback(prevFeedback => {
            const updatedFeedback = [...prevFeedback]
            updatedFeedback[activeRow] = finalFeedback
            return updatedFeedback
        })

        setActiveRow(activeRow+1)
    }


    return (
        <div>
            <h1>Mastermind</h1>
            <section style={{ 
                    border: "3px solid #493628",
                    borderRadius: "20px"
                }}>
                {
                    Array(8).fill().map((_,index) => (
                        <MastermindRow key={index} colourList={colourList} active={activeRow === index} updateAttempt={setCurrentAttempt} attemptFeedback={attemptFeedback[index]}/>
                    ))
                }
                
            </section>
            <div style={{ "padding": "20px" }}>
                <button onClick={checkSolution}>Submit</button>
                {/* <button onClick={() => {console.log(solution + currentAttempt)}}>Check Solution</button> */}
            </div>
                
        </div>
    )
}

export default Mastermind