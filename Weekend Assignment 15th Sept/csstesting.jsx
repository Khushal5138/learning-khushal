import React from "react";
import "./csstesting.css";

const ExampleComponent = () => {
  return (
    <div>
      <button
        style={{ margin: "20px", padding: "10px 20px", cursor: "pointer" }}
        onClick={() => document.getElementById("contact").scrollIntoView()}>
        Scroll to Contact
      </button>

      <div style={{ height: "100vh", backgroundColor: "#fafafa" }}>
        <h1>Scroll down for more</h1>
      </div>

      <div style={{ padding: "20px" }}>
        <h2>Resize Image Example</h2>
        <img
          src="https://via.placeholder.com/500x300"
          alt="Placeholder"
          style={{ border: "1px solid #ccc" }}
        />
      </div>

      <div style={{ padding: "20px" }}>
        <h2>Hover here to see the custom cursor</h2>
        <p>Move your cursor around this area.</p>
      </div>

      <div className="center" style={{ margin: "20px auto" }}>
        <p>I'm centered inside this box!</p>
      </div>

      <div style={{ padding: "20px" }}>
        <h2>Limited Content Paragraph</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod
          malesuada. Fusce et urna malesuada, tincidunt leo at, dapibus elit.
          Suspendisse potenti. Mauris auctor nisi vitae ipsum feugiat, nec
          scelerisque nunc tristique.
        </p>
      </div>

      <div className="noselect" style={{ padding: "20px" }}>
        <h2>You can't select this text!</h2>
        <p>Try selecting this text, but nothing will happen.</p>
      </div>

      <div id="contact" style={{ height: "100vh", backgroundColor: "#f0f0f0" }}>
        <h1>Contact Section</h1>
        <p>This is the contact section.</p>
      </div>
    </div>
  );
};

export default ExampleComponent;
