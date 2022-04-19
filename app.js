// alert('connected')
var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('.colorDisplay');
var info = document.querySelector('.info');
var headerDiv = document.querySelector('.headerDiv')
var resetBtn = document.querySelector('.resetBtn');
var modeBtns = document.querySelectorAll('.mode');


init();

function init(){
    // modeButtons
    setupModeBtns();

    //squares
    setupSquares()

    // reset
    reset();
}

// Reset Button Logic
resetBtn.addEventListener('click', function(){
    reset();
})


// *********************
//  FUNCTIONS TO BE USED ABOVE
// *********************

// 1. setup modeButton listeners
function setupModeBtns(){
    // Loop through modeBtns
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener('click', function(){
            modeBtns[0].classList.remove('selected');
            modeBtns[1].classList.remove('selected');
            this.classList.add('selected');
            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else {
                numSquares = 6
            }
            reset();
        })
    }
}

// 2. setup Squares listeners
function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        //'Click on squares' Logic    
        squares[i].addEventListener('click', function(){
            
            // add clicked square color into variable
            var clickedColor = this.style.background
        
            // compare clickedColor with pickedColor
            // and set the color of all squares when 
            // clickedColor matches with pickedColor
            if(clickedColor === pickedColor){
                for(var i = 0; i < squares.length; i++){
                    squares[i].style.background = clickedColor;
                }
                info.textContent = 'correct!'
                headerDiv.style.background = clickedColor;
                resetBtn.textContent = 'Play again?'
            }
            else {
                this.style.background = '#232323';
                info.textContent = 'try again'
            }
        })
        }
        
}


// 3. function to reset
function reset(){

    //generate new colors when btn is clicked
    colors = generateRandomColors(numSquares); //reset button is mode dependent; the value of numSquares after it's clicked depends on what mode you're on atm

    //pick new random color from arr
    pickedColor = pickRandom();

    // Reset info span to empty
    info.textContent = '';

    // change colorDisplay to match new picked color
    colorDisplay.textContent = pickedColor;

    // change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block'
            squares[i].style.background = colors[i]
        }
        else {
            squares[i].style.display = 'none'
    }
}

    // reset the background of headerDiv
    headerDiv.style.background = 'teal'

    // reset textContent of button for each new game
    resetBtn.textContent = 'New game'

}

// 4. function to pick random color
function pickRandom() {
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}


// 5. function to randomize x num of items in the colors arr
function generateRandomColors(num){
    
    // Make an arr
    var colorsArr = [];
    // iterate num of times
    for(var i = 0; i < num; i++){
        colorsArr.push(randomRGB()); 
    } 
    // return arr
    return colorsArr;
}

// 6. function to randomize rgb values
function randomRGB(){
    // randomize from 0 - 255 
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return 'rgb('+ r + ', ' + g + ', ' + b + ')'
}

