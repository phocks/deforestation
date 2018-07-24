const React = require("react");
const styles = require("./styles.scss");

const Parallax = require("../Parallax/");

const timeSlip = 10;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { qld: 0, nsw: 0, nt: 0, sa: 0, tas: 0, vic: 0, wa: 0 };
    // this.handleClick = this.handleClick.bind(this);
  }

  tick() {
    this.setState(prevState => ({
      qld: prevState.qld + 73.22 / timeSlip,
      nsw: prevState.nsw + 22.53 / timeSlip,
      nt: prevState.nt + 0.45 / timeSlip,
      sa: prevState.sa + 5.68 / timeSlip,
      tas: prevState.tas + 1.42 / timeSlip,
      vic: prevState.vic + 4.62 / timeSlip,
      wa: prevState.wa +  17.99 / timeSlip
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={styles.root}>
      <Parallax />
      {/* <h1>Land cleared in australia 1972 - 2014 average rate in real time:</h1> */}
        <h1>🌲🌲🌲 🌲🌲🌲</h1>
        <p>New South Wales: {Math.round(this.state.nsw)}</p>
        <p>Northern Territory: {Math.round(this.state.nt)}</p>
        <p>Queensland: {Math.round(this.state.qld)}</p>
        <p>South Australia: {Math.round(this.state.sa)}</p>
        <p>Tasmania: {Math.round(this.state.tas)}</p>
        <p>Victoria: {Math.round(this.state.vic)}</p>
        <p>Western Australia: {Math.round(this.state.wa)}</p>
        <h1>🌲🌲🌲 🌲🌲🌲</h1>
      </div>
    );
  }
}

module.exports = App;
