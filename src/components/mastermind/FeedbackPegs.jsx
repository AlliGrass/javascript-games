

function FeedbackPegs({attemptFeedback}) {
    return (
        <div style={{
            padding: "5px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridAutoRows: "1fr",
            gap: "15px", 
        }}>
            {attemptFeedback.map((feedbackColour, index) => (
                <div key={index} style={{
                    aspectRatio: "1",
                    border: "2px solid blue",
                    borderRadius: "50px",
                    minHeight: "0", 
                    backgroundColor: feedbackColour
                }}>
                </div>
            ))}
        </div>
    )
}

export default FeedbackPegs