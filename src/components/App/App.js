const React = require("react");
const styles = require("./styles.scss");

const Counter = require("../Counter");
const Parallax = require("../Parallax");
const Sketch = require("../Sketch");
const Portal = require("../Portal");

class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        
        {/* <Sketch /> */}
        <Counter />
        <Portal into=".pre-header">
        <Parallax />
        </Portal>
      </div>
    );
  }
}

module.exports = App;
