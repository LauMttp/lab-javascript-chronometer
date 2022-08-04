class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (callback) {
        callback();
      }
    }, 1000);
  }

  getMinutes() {
    let numberOfMinutes = Math.floor(this.currentTime / 60);
    return numberOfMinutes;
  }

  getSeconds() {
    let numberOfSeconds = this.currentTime % 60;
    return numberOfSeconds;
  }

  computeTwoDigitNumber(value) {
    let digitNumber;
    if (value < 10) {
      digitNumber = `0${value}`;
    } else {
      digitNumber = `${value}`;
    }
    return digitNumber;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let timeStamp =
      this.computeTwoDigitNumber(this.getMinutes()) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds());
    return timeStamp;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}