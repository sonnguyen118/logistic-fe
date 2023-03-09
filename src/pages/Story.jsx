import React from "react";
import Transmit from "react-transmit"; // Import Transmit.

const Story = React.createClass({
  render() {
    const { story } = this.props; // Fragments are guaranteed.

    return <p>{story.content}</p>;
  },
});

export default Transmit.createContainer(Story, {
  fragments: {
    // This "story" fragment returns a Fetch API promise.
    story({}) {
      return fetch("https://dog.ceo/api/breeds/image/random").then((res) =>
        res.json()
      );
    },
  },
});
