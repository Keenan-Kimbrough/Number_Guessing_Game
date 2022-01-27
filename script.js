"use strict"

const secretNumber = (Math.random() * 20 ) + 1;

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {  
      const guess = Number(document.querySelector('.guess').value);


    console.log(guess, typeof guess);
    
    document.querySelector('.check').addEventListener('click', function () { console.log(' Hi Keenan ')})

//guess is not a numebr


    if (!guess) { document.querySelector('.message').textContent = ' NO Number! ';
        score--;

    document.querySelector('.score').textContent = score}

// when player wins
    else if (guess === secretNumber ) 

        {    document.querySelector('.message').textContent = ' You have guessed the secret number'    


    if ( score > highscore ) {
            highscore = score
            document.querySelector('.highscore').textContent = highscore
            }
        }

// when guess is too highelse 

    if ( guess > secretNumber) {  
        
        if (score >1)  {



        document.querySelector('.message').textContent = ' you guessed to high';  
          score--;    
          
          document.querySelector('.score').textContent = score;
            }
    else {
        document.querySelector('.message').textContent = ' You completely losted the game';
            }
        }
//when the guess is to lowelse 


if  ( guess < secretNumber) {    
    document.querySelector('.message').textContent = ' To low ';    
    score--;    
    document.querySelector('.score').textContent = score;} }