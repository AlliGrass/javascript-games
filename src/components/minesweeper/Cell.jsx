import { useEffect, useState } from "react";

function Cell({cellStatus, checkBomb}) {

    return (
        <div onClick={checkBomb} style={{
            flex: "1 0 auto",
            background: "#D6C0B3",
            aspectRatio: "1 / 1", 
            border: "solid 1px #493628",
            overflow: "hidden", 
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px", 
            textAlign: "center",
            padding: "2px",
            wordBreak: "break-word",
            minWidth: "50px",
            cursor: "pointer"
        }}>
            {cellStatus}
        </div>
    )
}

export default Cell