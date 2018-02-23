const yargs = require('yargs').argv

let choice
let randomNum = Math.floor(Math.random() * 3)
switch(randomNum) {
  case 0:
    choice = "rock"
    break;
  case 1:
    choice = "paper"
    break;
  case 2:
    choice = "scissors"
    break;
}


class Game {
  constructor(go) {
    this.Human = new Player(yargs.go)
    this.Computer = new Player()
    this.outcome = ''
  }
  play() {
    if (this.Human.go === this.Computer.go) {
      this.outcome = 'It is a tie!'
      return
    }
    if (this.Human.go == "rock" && this.Computer.go == "scissors" ||
        this.Human.go == "paper" && this.Computer.go == "rock" ||
        this.Human.go == "scissors" && this.Computer.go == "paper") {
          this.outcome = "~YAY!!!! THE HUMAN WINS!!!~"
          return
        } else {
          this.outcome = "~boo. computer wins~"
        }
  } //end of play()
  scribe() {
    console.log('You are laying a game of Roshambo against the computer.')
    console.log(`Human plays ${this.Human.go}!`)
    console.log(`Computer plays ${this.Computer.go}!`)
    console.log(`${this.outcome}`)
  }

}

class Player {
  constructor(go) {
    this.go = go || choice
  }
}

const letsPlay = new Game()
letsPlay.play()
letsPlay.scribe()
