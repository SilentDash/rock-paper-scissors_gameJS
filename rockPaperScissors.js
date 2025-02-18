// console.log("hi");
// let roundUser = 0;
// let roundOS = 0;
let gameEnded = false;
let roundFinished = 0;

const getuserChoice = (...userInput) => {
  let input = userInput;
  for(let i = 0; i<userInput.length; i++){
   // each input of each individual choice
    userInput[i] = userInput[i].toLowerCase();
    userInput[i] = userInput[i].trim();
    input[i] = userInput[i];
    // console.log(input)
  }
  let test = userInput.length;

  // console.log(input);
  let verifiedText = [];

  for (let i = 0; i<userInput.length; i++) {
    const registry = ["rock", "paper", "scissors"];
    for (let r = 0; r < registry.length; r++) {
      //registry[r];
      if (userInput[i] === registry[r]) {
        verifiedText.push(registry[r]);
        // test--;
        console.log(verifiedText);
        // console.log(test);
      }
    // console.log(i);
    }
  }
  return verifiedText;
};

class game {
  constructor(gate) {
    this.gate = gate;
    this.roundOS = 0;
    this.roundUser = 0;
  }

  resetGame(cmdCode,p1,p2, rounds){
    const checker = () => cmdCode === "Reset";

    if(gameEnded === true && rounds === roundFinished & checker()){
    this.roundUser = 0;
    this.roundOS = 0;
    this.respond('Game Resetted!');
    gameEnded = false;
    roundFinished = 0;
    }    
  }

  checkGameStatus(rounds, scoreA, scoreB, ...other) {
          const playerA = scoreA > scoreB ? true : false;
          const playerB = scoreB > scoreA ? true : false;
          const roundsLeft = () => {
          let finalization = scoreA + scoreB;
          const final = finalization < rounds ? true : false;
          return final;
     }

    // };

    // const results = () => {
    //   switch (roundsLeft) {
    //     case roundsLeft === true:
    //       rounds--;
    //       console.log(`${rounds} rounds left.`);
    //       break;
    //     case roundsLeft === false:
          
    //     break;
    //   }
    // };
    return roundsLeft();
  }

  respond(text) {
    console.log(text);
  }

  hasEnded(a, b) {
    const winner = () => {
        if (a !== b && a > b) { 
           return `Player has won with points of ${a}`
          } else if(a !== b && b > a){
            return `OS has won with points of ${b}`;
          } else {
            return `Both Player and OS has ended with a draw, tie! OS Points: ${b} | User Points ${a}`;
          }
    }
    console.log('test')
   this.respond(winner());
  }

  gameActivate(rounds) {
    let randomMath = Math.floor(Math.random() * 2);

    const registry = ["rock", "paper", "scissors"];
    let roundChosen = registry[randomMath];

    //  let roundBased = 0;
    //  let currentRoundChosen = [];

    const resultOutcomes = {
      "You Won": () => this.roundUser++,
      "You Lost": () => this.roundOS++,
      "Tie": () => {},
    };

    const outcomes = {
      "rock": {
        "rock": "Tie",
        "paper": "You Won",
        "scissors": "You Lost",
      },
      "paper": {
        "rock": "You Lost",
        "paper": "Tie",
        "scissors": "You Won",
      },
      "scissors": {
        "rock": "You Won",
        "paper": "You Lost",
        "scissors": "Tie",
      },
    };


    for(let rx of this.gate){
      let gateARY = () => {return rx};
      // resultOutcomes[result]();
      if (this.checkGameStatus(rounds, this.roundUser, this.roundOS) === true){
      this.respond(`=======================`);

      console.log(`User chosen: ${gateARY()}`);
      console.log(`OS Chosen: ${roundChosen}`);
      const result = outcomes[roundChosen][rx];
      resultOutcomes[result]();

      console.log(`${result}`);
      this.respond(`------------------------`);
      console.log(`User Points: ${this.roundUser}`);
      console.log(`OS Points: ${this.roundOS}`);
      this.respond(`=======================`);
      this.respond('');

      let c = this.roundUser;
      let d = this.roundOS;
      roundFinished++;
      // this.respond(a, b);

      // console.log(`-----------------------`);
      // this.respond(this.gate);
      if(rx === this.gate[this.gate.length - 1] && roundFinished === rounds){
        this.hasEnded(c, d);
        // console.log(this.gate[rounds]);
        this.respond(`User Points: ${this.roundUser} | OS Points: ${this.roundOS}`);
        gameEnded = true;
        this.resetGame("Reset", this.roundUser, this.roundOS, rounds);
      };
      // console.log(rx === this.gate[this.gate.length])
      // this.respond(this.gate)
      // this.respond(this.gate[this.gate.length - 1])

      } else {
        throw new error("You've crashed the system. Thank you for your coorperation and gameplay.");
      }
    }


    // const ended = {
    //   rounds: () => roundUser > roundOS ? "You Won this round" : "You Lost this round",
    //   check: (a,b) => {
    //     if(a > b) {
    //       return "Won this round";
    //     } else if (a > b) {
    //       return "Lost this round";
    //     } else if (a === b){
    //       return "Its a tie!";
    //     }
    //   }
    // };
    // resultOutcomes[result](); //updates the results
    // console.log(ended.rounds()); // checks the results comparison
    // console.log(ended.check(roundUser, roundOS)); // User side
    // console.log(ended.check(roundOS, roundUser)); // OS Side
    // console.log(roundUser, roundOS)
    // roundUser>0?console.log(roundUser):console.log(roundOS);
    // if (roundUser < rounds || roundOS < rounds){

    // }
    //
    // Legend: > means better/eats
    // Logic:  Paper > Rock | Rock > Scissors | Scissors > Paper
    this.checkGameStatus(rounds, this.roundUser, this.roundOS)
  }
}

let verification = getuserChoice("  scissors ", "Rock","Rock");
let startGame = new game(verification);
startGame.gameActivate(3);
