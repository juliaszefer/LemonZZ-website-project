import React from "react";

export default function SubmitButton({opacity}) {
    if (opacity === 1) {
        return (
            <div className="submitButton">
                <button>SEND</button>
            </div>
        )
    }
}