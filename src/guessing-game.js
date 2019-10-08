class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
        return Math.round((this.left + this.right) / 2);
    }

    lower() {
        this.right = Math.round((this.left + this.right) / 2);
    }

    greater() {
        this.left = Math.round((this.left + this.right) / 2);
    }
  }

module.exports = GuessingGame;
