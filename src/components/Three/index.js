const React = require('react');
const styles = require('./styles.scss');

class Three extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        Find me in <strong>src/components/Three/index.js</strong>
      </div>
    );
  }
}

module.exports = Three;