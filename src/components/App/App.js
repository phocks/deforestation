const React = require("react");
const styles = require("./styles.scss");

const Counter = require("../Counter");
const Parallax = require("../Parallax");

class App extends React.Component {
  render() {
    return (
      <div className={styles.root}>
        <Parallax />
        {/* <Counter /> */}
      </div>
    );
  }
}

module.exports = App;
