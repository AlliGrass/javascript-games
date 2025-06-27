import { useEffect, useState } from "react";

function Cell({cellStatus, checkBomb}) {

    return (
        <div onClick={checkBomb} style={{
            flex: "1 0 auto",        // Grow to fill space, don't shrink below content
    background: "gray",
    aspectRatio: "1 / 1",    // Ensures square shape
    border: "solid 1px red",
    overflow: "hidden",      // Prevents text overflow
    display: "flex",         // Enables Flexbox
    alignItems: "center",    // Centers vertically
    justifyContent: "center",// Centers horizontally
    fontSize: "16px", // Responsive font (scales with viewport but caps at 16px)
    textAlign: "center",     // Ensures text alignment
    padding: "2px",          // Small padding to prevent edge-touching
    wordBreak: "break-word", // Allows text wrapping if needed
    minWidth: "50px",        // Prevents divs from becoming too small
    cursor: "pointer"        // Shows clickable cursor (optional)
        }}>
            {cellStatus}
        </div>
    )
}

export default Cell