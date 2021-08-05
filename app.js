window.addEventListener('load', init);

const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

const wordInput = document.getElementById('word-input');
const currentWord = document.getElementById('current-word');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const message = document.getElementById('message');
const Second = document.getElementById('second');


    const words = [
        'hat',
        'mat',
        'time',
        'river',
        'statue',
        'generate',
        'javascript',
        'developer',
        'cocktail',
        'echo',
        'siblings',
        'hero',
        'runaway',
        'jokes'

    ];

    // console.log('done');
    

    //init game
    function init() {

        Second.innerHTML = currentLevel;

        showWord(words);

        //match word input
        wordInput.addEventListener('input',match)

        //countDown
        setInterval(countDown, 1000);

        //check game status
        setInterval(checkStatus, 50);
    }

    function match() {
        if (matchWords()) {
            isPlaying = true;
            time = currentLevel + 1;
            showWord(words);
            wordInput.value = '';
            score++
        }

        if (score === -1) {
        scoreDisplay.innerHTML = 0;
            
        } else {
        scoreDisplay.innerHTML = score;
        }

    }

    // match currentWord to input
    function matchWords() {
        if (wordInput.value === currentWord.innerHTML) {
            message.innerHTML = 'Correct';
            return true;
        } else{
            message.innerHTML = '';
            return false;
        }
    }

    function showWord(words) {
        // console.log('new');
        const randomIndex = Math.floor(Math.random()* words.length);
        currentWord.innerHTML = words[randomIndex];
    }

    function countDown(){
        if (time > 0) {
            time--;
        } else if(time === 0){
            isPlaying = false;
        }

        //show current time
        timeDisplay.innerHTML = time;
    }

    function checkStatus() {
        if (!isPlaying && time === 0) {
            message.innerHTML = 'Game Over!!!';
            score = -1;
        }
    }