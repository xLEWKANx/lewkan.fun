import React, { Component } from 'react';
import logo from './leshkan_white.svg';
import track from './track.mp3';
import styles from './App.module.css';
import MapContainer from './Map';

const moons = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘', '🌚'];
const hours = ['🕛','🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚'];
const halfh = ['🕧','🕜','🕝','🕞','🕟','🕠','🕡','🕢','🕣','🕤','🕥','🕦'];

let count = 0;

class App extends Component {
  endTime = new Date(2019, 0, 26, 18, 0);
  state = {
    time: new Date(new Date(2019, 0, 26, 18, 0) - new Date()),
    clock: count
  }

  updateTimer = () => {
    window.location.hash = moons[++count % moons.length].repeat(100);
    this.setState({ 
      time: new Date(new Date(2019, 0, 26, 18, 0) - new Date()),
     }) 
  }

  componentDidMount() {
    setTimeout(() => {
      this.frame.contentWindow.document.getElementsByTagName('video')[0].style = 'width: 100%';
    }, 1000)
    window.setInterval(this.updateTimer, 1000);
  }

  addZero(unit) {
    if (unit < 10) unit = '0' + unit;;
    return unit;
  }


  renderTime(time) {
    const days = time.getDate();
    const hours = this.addZero(time.getHours());
    const minutes = this.addZero(time.getMinutes());
    const seconds = this.addZero(time.getSeconds());
    return `0${days}:${hours}:${minutes}:${seconds}`;
  }

  emojiTime() {
    const clock = (new Date().getSeconds() % 2 - 1) ? hours : halfh;
    return clock[new Date().getSeconds() % clock.length];
  }

  render() {
    return (
      <div className={styles.App}>
        <iframe title="track" ref={frame => this.frame = frame} src={track} allow="autoplay" autoPlay={true} controls={true} className={styles.Player}>
        </iframe>
        <div className={styles.AppCrop}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
        </div>
        <p>
          <span className={styles.Timer}>
            {this.emojiTime()}
            <br />
            {this.renderTime(this.state.time)}
          </span>
        </p>
        Будет весело, базарю
        <MapContainer />
      </div>
    );
  }
}

export default App;
