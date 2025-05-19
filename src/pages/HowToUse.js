import React from "react";
import "./HowToUse.css"; // We'll create this for styling

const HowToUse = () => {
  const steps = [
    {
      number: 1,
      title: "Add Your Image",
      description:
        "Drag and drop your image file into the upload area or click to browse your files. Supported formats: JPG, PNG, WEBP.",
      icon: "📤",
    },
    {
      number: 2,
      title: "Adjust Settings",
      description:
        "Customize compression quality (1-100%) and resize dimensions. Toggle aspect ratio lock to maintain proportions.",
      icon: "⚙️",
    },
    {
      number: 3,
      title: "Download Result",
      description:
        "Preview your compressed image and click 'Download' to save it to your device with automatic naming.",
      icon: "💾",
    },
  ];

  return (
    <div className="how-to-use">
      <h2 className="section-title">How to Use This Tool</h2>
      <p className="section-subtitle">Compress images in just 3 simple steps</p>

      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.number} className="step-card">
            <div className="step-header">
              <span className="step-number">{step.number}</span>
              <span className="step-icon">{step.icon}</span>
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToUse;
