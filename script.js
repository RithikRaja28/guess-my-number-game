'use strict'

const close = document.querySelector(".close").addEventListener("click", ()=>
{
    document.querySelector('.info_enteranumber').textContent = " ";
})

let number = Math.trunc(Math.random()*20 + 1);
let score = 20;
let highscore = 0;
document.querySelector(".user_score").textContent = score;
document.querySelector(".user_highscore").textContent = highscore;

document.querySelector(".check").addEventListener('click',()=>
{
    const guess = Number(document.querySelector('.input').value);
    if(!guess)
    {
        document.querySelector(".message").textContent= "🚫 No Input";
    }
    else if(guess === number)
    {
        document.querySelector('.message').textContent = "🎉 Correct Answer! 🏆";
        document.querySelector("body").style.backgroundColor = "#60b347"
        const randomnumber = (document.querySelector('.random').textContent =
          number);
          if(score > highscore)
          {
            highscore = score;
            document.querySelector('.user_highscore').textContent=highscore;
          }
    }
    else if(guess > number)
    {
        if(score > 0)
        {
        document.querySelector(".message").textContent = "💭 Oh ! Too High . . . 😖 "
        score--;
        document.querySelector(".user_score").textContent = score;
        }
        else{
            document.querySelector(".message").textContent = "⚠️ You Lost the game !"
            document.querySelector("body").style.backgroundColor = "#E3242B"
        }
    }
    else if(guess < number)
    {
        if(score > 0)
        {
            document.querySelector('.message').textContent =
              '💭 Hmmm ! Too less . . . 😖 ';
            score--;
            document.querySelector('.user_score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '⚠️ You Lost the game !';
            document.querySelector('body').style.backgroundColor = '#E3242B';
        }
        
    }
});

document.querySelector(".reset").addEventListener('click', ()=>
{
    score= 20;
    number = Math.trunc(Math.random() * 20 + 1);
    highscore = 0;

    document.querySelector('.message').textContent =
       '🎮 Start Guessing  . . .';
    document.querySelector('.user_score').textContent = score;
    document.querySelector(".random").textContent="?";
    document.querySelector(".input").value = " ";
    document.querySelector("body").style.backgroundColor = "#fff";
     document.querySelector('.user_highscore').textContent = highscore;
});