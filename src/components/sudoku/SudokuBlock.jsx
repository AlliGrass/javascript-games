
function SudokuBlock({blockIndex}) {
    

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 45px)',
            gridTemplateRows: 'repeat(3, 45px)',
            // gap: '5px',
            border: "5px solid #493628"
        }}>
            {
                Array(9).fill().map((_,index) => {
                    // console.log(`${blockIndex}${index}`)
                    return (
                        <input style={{backgroundColor: "#D6C0B3"}} value={index+1} />
                    )
                })
            }
        </div>
    )
}

export default SudokuBlock