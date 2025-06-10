
function Peg({pegColour, setPegColour}) {

    return (
        <div onClick={setPegColour} style={{
            padding: "20px",
            border: "2px solid blue",
            borderRadius: "50px",
            backgroundColor: pegColour
        }}>
        </div>
    )
}

export default Peg