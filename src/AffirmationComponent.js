
import React from "react";

import { getRandomQuote } from "./utils/QuoteService";

import "./App.css";

class AffirmationComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      affirmation: getRandomQuote()
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ affirmation: getRandomQuote() });
  }

  render() {
    const affirmation = this.state.affirmation;
    return (
      <div className="Affirmation">
        <div className="quote">
          <blockquote>{affirmation.affirmation}</blockquote>
          <p className="author-citation">{affirmation.author}</p>
          <button onClick={this.handleClick}> ⟳ </button>
        </div>
      </div>
    );
  }
}

export default AffirmationComponent;

