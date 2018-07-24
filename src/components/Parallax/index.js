const React = require('react');
const styles = require('./styles.scss');

class Parallax extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        Find me in <strong>src/components/Parallax/index.js</strong>
      </div>
    );
  }
}

module.exports = Parallax;