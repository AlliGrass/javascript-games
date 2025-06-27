import { useEffect, useState } from "react"
import Cell from "../components/minesweeper/Cell"


function Minesweeper() {
    const [gameStatus, setGameStatus] = useState()
    const [bombLocations, setBombLocations] = useState()
    const rows = 10
    const cols = 10
    const [cellStates, setCellStates] = useState(Array(rows).fill().map(() => Array(cols).fill().map(() => "")))
    const bombAmount = 15

    useEffect(() => {
        const totalUntouchedCells = cellStates.flatMap(row => row.filter(cell => cell === ""))
        if (totalUntouchedCells === bombAmount) winCondition()
    }, [cellStates])

    const loseCondition = () => {
        setGameStatus("Lose")
        return "Bomb"
    }

    const winCondition = () => {
        setGameStatus("Win")
    }

    const generateCoord = () => {
        const xCoord = Math.floor(Math.random() * rows)
        const yCoord = Math.floor(Math.random() * cols)
        return [xCoord, yCoord]
    }

    const generateBombs = (bombAmount, initialCell) => {
        const [initialx, initialy] = initialCell
        const bombCoords = Array(bombAmount).fill().reduce((prevCoords) => {
            while (true) {
                const [xCoord, yCoord] = generateCoord()
                if (!prevCoords.some(([checkX, checkY]) => checkX === xCoord && checkY ===yCoord || checkX === initialx && checkY === initialy)) return [...prevCoords, [xCoord, yCoord]]
            }
        }, [])
        setBombLocations(bombCoords)
        return bombCoords
    }

    const checkBomb = (coords, inputBombLocations) => {
        const [xCoord, yCoord] = coords
        if (inputBombLocations? inputBombLocations.some(([checkX, checkY]) => checkX === xCoord && checkY ===yCoord) : bombLocations.some(([checkX, checkY]) => checkX === xCoord && checkY ===yCoord)) return true
    }

    const cycleSurroundingCells = (coords) => {
        let workingBombLocations
        if (!bombLocations) workingBombLocations = generateBombs(bombAmount, coords)
        if (checkBomb(bombLocations? coords : coords, workingBombLocations)) return loseCondition()
        const [xCoord, yCoord] = coords
        let totalBombs = 0
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                if (x === 0 && y === 0) continue
                if (checkBomb(bombLocations? [xCoord + x, yCoord+ y] : [xCoord + x, yCoord+ y], workingBombLocations )) totalBombs++
            }
        }

        return totalBombs
    }

    const checkCellStatus = (coords) => {
        const totalBombs = cycleSurroundingCells(coords)

        if (totalBombs === 0) chainCellStatus(coords, coords)
        return totalBombs
    }

    const updateCellStatus = (xCoord, yCoord) => {
        const cellStatus = checkCellStatus([xCoord, yCoord])
        setCellStates(prevStates => {
            const newStates = [...prevStates]
            newStates[xCoord][yCoord] = cellStatus
            return newStates
        })
    }

    const chainCellStatus = (initialCoords) => {
        const workingCellStates = [...cellStates]
        console.log(workingCellStates)
        const checkCellQueue = [[...initialCoords]]

        while (checkCellQueue.length) {
            console.log(checkCellQueue)
            let currentCellCoords = checkCellQueue.pop()
            
            const [initialx, initialy] = currentCellCoords
            for (let x = -1; x <= 1; x++) {
                for (let y = -1; y <= 1; y++) {
                    const updatedX = initialx+x
                    const updatedY = initialy+y
                    if (x === 0 && y === 0 || updatedX === -1 || updatedX === 10 || updatedY === -1 || updatedY === 10) continue
                    const currentCellBombTotal = cycleSurroundingCells([updatedX, updatedY])
                    if (currentCellBombTotal === 0 && workingCellStates[updatedX][updatedY] === "") checkCellQueue.push([updatedX, updatedY])
                    workingCellStates[updatedX][updatedY] = currentCellBombTotal
                }
            }
        }

        setCellStates(workingCellStates)
        
    }


    return (
        <div>
            <h1>Minesweeper</h1>
            <p>{gameStatus}</p>
            {/* <button onClick={() => generateBombs(5, [2,4])}>press</button> */}
            <section>
                <div>
                    {
                        Array(rows).fill().map((_,index) => {
                            const xCoord = index
                            return (
                                <div key={xCoord} style={{
                                    width: "100%",
                                    display: "flex"
                                }}>
                                    {
                                        Array(cols).fill().map((_, index) => {
                                            const yCoord = index
                                            return (
                                                <Cell key={`${xCoord}${index}`} cellStatus={cellStates[xCoord][yCoord]} checkBomb={() => updateCellStatus(xCoord, yCoord)}/>
                                            )
                                        })
                                    }
                                </div>
                                 
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Minesweeper