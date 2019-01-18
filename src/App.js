import React, { Component } from 'react';
import logo from './leshkan_white.svg';
import track from './track.mp3';
import styles from './App.module.css';
import MapContainer from './Map';

class App extends Component {
  endTime = new Date(2019, 0, 26, 18, 0);
  state = {
    time: new Date(new Date(2019, 0, 26, 18, 0) - new Date())
  }

  updateTimer = () => {
    this.setState({ time: new Date(new Date(2019, 0, 26, 18, 0) - new Date()) }) 
  }

  componentDidMount() {
    window.setInterval(this.updateTimer);
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
    return `0${days}:${hours}:${minutes}:${seconds}`
  }

  render() {
    return (
      <div className={styles.App}>
        <video src="https://giphy.com/gifs/6wpHEQNjkd74Q/html5" autoPlay={true} muted={true} />
        <div className={styles.AppCrop}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
        </div>
        <p>
          <span className={styles.Timer}>
            {this.renderTime(this.state.time)}
          </span>
        </p>
        Будет весело, базарю
        <MapContainer />
        <iframe title="track" src={track} allow="autoplay" autoPlay={true} style={{display: 'none'}}></iframe>
      </div>
    );
  }
}

export default App;
