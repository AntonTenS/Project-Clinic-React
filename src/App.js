import Hello from "./hello";
import React from "react";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
          <Hello></Hello>
        </h1>
      </>
    );
  }
}

export default App;
