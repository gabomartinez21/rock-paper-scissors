// console.log('Hello world');

let computerScore = 0, userScore = 0
const userScore_span = document.querySelector('#user-score'),
     computeScore_span = document.querySelector('#computer-score');
     scoreBoard_div = document.querySelector('.score-board'),
     result_p = document.querySelector('.result p'),
     rock_div = document.querySelector('#r'),
     paper_div = document.querySelector('#p'),
     scissors_div = document.querySelector('#s');



function getComputerChoice(){
     const choices = ['r','p','s'];
     let i = Math.floor(Math.random()*3)
     return choices[i];
}

function convertToWord(letra){
     if(letra === 'r'){
          return 'Piedra';
     }else if(letra === 's'){
          return 'Tijeras';
     }else if(letra === 'p'){
          return 'Papel';
     }
}

function win(userChoice, computerChoice){
     userScore++;
     userScore_span.innerText = userScore;
     user = convertToWord(userChoice);
     computer = convertToWord(computerChoice);
     const smallUserWord = 'user'.fontsize(3).sup();
     const smallCompWord = 'comp'.fontsize(3).sup();
     result_p.innerHTML = `${user}${smallUserWord} vence a ${computer}${smallCompWord}, Ganaste!!`

     document.querySelector('#'+userChoice).classList.add('green-glow');
     setTimeout(() => document.querySelector('#'+userChoice).classList.remove('green-glow'), 500);
     scoreBoard_div.classList.add('green-glow');
     setTimeout(() => scoreBoard_div.classList.remove('green-glow'), 500)
}

function lose(userChoice, computerChoice){
     computerScore++;
     computeScore_span.innerHTML = computerScore;
     user = convertToWord(userChoice);
     computer = convertToWord(computerChoice);
     const smallUserWord = 'user'.fontsize(3).sup();
     const smallCompWord = 'comp'.fontsize(3).sup();
     result_p.innerHTML = `${computer}${smallCompWord} vence a ${user}${smallUserWord}, pierdes`;
     document.querySelector('#'+userChoice).classList.add('red-glow');
     setTimeout(() => document.querySelector('#'+userChoice).classList.remove('red-glow'), 500);
     scoreBoard_div.classList.add('red-glow');
     setTimeout(() => scoreBoard_div.classList.remove('red-glow'), 500);
}

function tie(userChoice, computerChoice){
     user = convertToWord(userChoice);
     computer = convertToWord(computerChoice);
     const smallUserWord = 'user'.fontsize(3).sup();
     const smallCompWord = 'comp'.fontsize(3).sup();
     result_p.innerHTML = `${user}${smallUserWord} empata a ${computer}${smallCompWord}`;
     document.querySelector('#'+userChoice).classList.add('gray-glow');
     setTimeout(() => document.querySelector('#'+userChoice).classList.remove('gray-glow'), 500);
     scoreBoard_div.classList.add('gray-glow');
     setTimeout(() => scoreBoard_div.classList.remove('gray-glow'), 500)
}



function game(userChoice){
     const computerChoice = getComputerChoice();
     // console.log(computerChoice);
     switch(userChoice+computerChoice){
          case 'pr':
          case 'rs':
          case 'sp':
               win(userChoice, computerChoice);
               break;
          case 'rp':
          case 'sr':
          case 'ps':
               lose(userChoice, computerChoice);
               break;
          case 'rr':
          case 'ss':
          case 'pp':
               tie(userChoice, computerChoice);
               break;
     }
}



function main(){


     rock_div.addEventListener('click', () => game("r"))
     paper_div.addEventListener('click', () => game("p"))
     scissors_div.addEventListener('click', () => game("s"))
}

main()
