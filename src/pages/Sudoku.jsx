import SudokuBlock from "../components/sudoku/SudokuBlock"
import generateColumns from "../components/sudoku/utils/generateColumns"
import generateRow from "../components/sudoku/utils/generateRows"


function Sudoku() {
    const rows = generateRow()
    const columns = generateColumns()

    return (
        <div>
            <h1>Sudoku</h1>
            <section>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 150px)',
                    gridTemplateRows: 'repeat(3, 150px)',
                    border: "5px solid red"
                }}>
                    {
                        Array(9).fill().map((_,index) => {
                            const blockIndex = index+1
                            return (
                                <SudokuBlock blockIndex={blockIndex}/>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default Sudoku