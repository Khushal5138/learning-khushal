import React from "react";
import "./CSSExamples.css";

const CSSExamples = () => {
  return (
    <div className="css-examples">
      {/* Relative Units */}
      <div className="wrapper">
        <p>
          This div takes up 90% of the viewport width to a maximum of 940px.
        </p>
        <div className="inner">
          <p>
            The nested div is set to 50%. This makes it 50% of its direct
            parent.
          </p>
        </div>
      </div>

      {/* CSS Selectors */}
      <div className="selectors">
        <h1>
          This is a heading with <em>blue emphasized text</em>
        </h1>
        <h2>Subtitle with lowered transparency</h2>
        <p>Paragraph under subtitle</p>

        <div>
          <p className="example">
            This is not a blue paragraph because it is inside a div.
          </p>
        </div>
        <p className="example">
          This paragraph is blue because it is directly in the body.
        </p>
      </div>

      {/* nth-of-type Selectors */}
      <ul className="list">
        <li>First Item</li>
        <li>Second Item</li>
        <li>Third Item</li>
        <li>Fourth Item</li>
        <li>Fifth Item</li>
      </ul>
    </div>
  );
};

export default CSSExamples;
