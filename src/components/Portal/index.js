const React = require("react");
const ReactDOM = require("react-dom");

const styles = require("./styles.scss");

class Portal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div className={styles.wrapper}>{this.props.children}</div>,
      document.querySelector(this.props.into)
    );
  }
}

module.exports = Portal;
