import { useEffect, useState } from "react"
import Peg from "./Peg"
import FeedbackPegs from "./FeedbackPegs"


function MastermindRow({colourList, active, updateAttempt, attemptFeedback}) {
    const [selections, setSelections] = useState(Array(4).fill(""))

    useEffect(() => {
        updateAttempt(selections)
    }, [selections, updateAttempt])

    const togglePegColour = (pegIndex) => {
        if (!active) return

        setSelections(prevPegs => {
            const currentPegColourIndex = colourList.indexOf(prevPegs[pegIndex])
            const nextPegColourIndex = (currentPegColourIndex + 1)
            const updatedPegs = [...prevPegs]
            updatedPegs[pegIndex] = colourList[nextPegColourIndex]
            return updatedPegs
        })
    }


    return (
        <div style={{ 
            // border: '5px solid black',
            display: "grid",
            gridTemplateColumns: "4fr 1fr"
        }}>
            <section>
                <div style={{
                    padding: "15px",
                    paddingLeft: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                    {selections.map((pegColour, index) => {
                        return (
                            <Peg key={index} pegColour={pegColour} setPegColour={() => {togglePegColour(index)}}/>
                        )
                    })}
                </div>
                
            </section>
            <section> 
                <div style={{
                    display: "grid",
                    alignItems: "center",
                    height: "100%"
                }}>
                    <FeedbackPegs attemptFeedback={attemptFeedback}/>
                </div>
                
            </section>
        </div>
    )
}

export default MastermindRow