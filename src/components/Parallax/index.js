const React = require("react");
const styles = require("./styles.scss");

// const THREE = require("three");
// const Modernizr = require("modernizr");

// const bg = require("./images/parallax-bg.jpg")

// shim layer with setTimeout fallback
window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

class Parallax extends React.Component {
  componentDidMount() {
    var $ = document.querySelector.bind(document);

    var bg = $("#bg");
    var blob1 = $("#blob-1");
    var blob2 = $("#blob-2");
    var blob3 = $("#blob-3");
    var blob4 = $("#blob-4");
    var blob5 = $("#blob-5");
    var blob6 = $("#blob-6");
    var blob7 = $("#blob-7");
    var blob8 = $("#blob-8");
    var blob9 = $("#blob-9");
    var canvas = $("#blob-container canvas");
    var context = canvas.getContext("2d");

    // var mainBG = $("section#content");

    // var stripe = $("aside");
    var ticking = false;
    var lastScrollY = 0;

    function onResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight + 1000;

      updateElements(window.pageYOffset);
    }

    function onScroll(evt) {
      if (!ticking) {
        ticking = true;
        requestAnimFrame(updateElements);
        lastScrollY = window.pageYOffset;
      }
    }

    function updateElements() {
      var relativeY = lastScrollY / 3000;

      context.fillStyle = "#1e2124";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(bg, 0, pos(0, 600, relativeY, 0), 2300, 3200);
      context.drawImage(blob1, 700, pos(254, -4400, relativeY, 0));
      context.drawImage(blob2, 84, pos(954, -5400, relativeY, 0));
      context.drawImage(blob3, 584, pos(1054, -3900, relativeY, 0));
      context.drawImage(blob4, 44, pos(1400, -6900, relativeY, 0));
      context.drawImage(blob5, -40, pos(1730, -5900, relativeY, 0));
      context.drawImage(blob6, 325, pos(2860, -7900, relativeY, 0));
      context.drawImage(blob7, 725, pos(2550, -4900, relativeY, 0));
      context.drawImage(blob8, 570, pos(2300, -3700, relativeY, 0));
      context.drawImage(blob9, 640, pos(3800, -9000, relativeY, 0));

      ticking = false;
    }

    function pos(base, range, relY, offset) {
      return base + limit(0, 1, relY - offset) * range;
    }

    function prefix(obj, prop, value) {
      var prefs = ["webkit", "Moz", "o", "ms"];
      for (var pref in prefs) {
        obj[prefs[pref] + prop] = value;
      }
    }

    function limit(min, max, value) {
      return Math.max(min, Math.min(max, value));
    }

    window.addEventListener("load", onResize, false);
    window.addEventListener("resize", onResize, false);
    window.addEventListener("scroll", onScroll, false);

    updateElements(window.pageYOffset);
    
  }
  render() {
    return (
      <div id="blob-container">
        <canvas width="2500" height="2500" />
        <img id="bg" src={require("./images/plants.jpg")} />
        <img id="blob-1" src={require("./images/blob-1.png")} />
        <img id="blob-2" src={require("./images/blob-2.png")} />
        <img id="blob-3" src={require("./images/blob-3.png")} />
        <img id="blob-4" src={require("./images/blob-4.png")} />
        <img id="blob-5" src={require("./images/blob-5.png")} />
        <img id="blob-6" src={require("./images/blob-6.png")} />
        <img id="blob-7" src={require("./images/blob-7.png")} />
        <img id="blob-8" src={require("./images/blob-8.png")} />
        <img id="blob-9" src={require("./images/blob-9.png")} />
      </div>
    );
  }
}

module.exports = Parallax;
