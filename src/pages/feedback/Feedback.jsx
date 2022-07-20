import "./feedback.css";
import React from 'react';
import ReactDOM from "react-dom";
import SimpleFeedback from "react-simple-feedback";

function Feedback() {
  return (
    <div className="feedback">
    <SimpleFeedback
      label="How do you feel about my website..."
      message="Thank you for your feedback 👍"
      onClose={() => window.location.reload()}
      tags={[
        {
          value: 0,
          emoji: "😘",
          label: "Excellent"
        },
        {
          value: 1,
          emoji: "🙂",
          label: "Good"
        },
        {
          value: 2,
          emoji: "😅",
          label: "So so"
        },
        {
          value: 3,
          emoji: "🙁",
          label: "Not quite goood"
        },
        {
          value: 4,
          emoji: "😡",
          label: "Delete it and try again"
        
        }
      ]}
    />
  </div>);
}
export default Feedback;


