// calling global variance
var imgSource = null;
var beforeImgCell = null;
var lastDraggedCell = null;

function makePuzzleBox(){
    imgList = []
    var indexList = [1,2,3,4,5,6,7,8,9];

    for (var i = 1 ; i < 10; i++){
        var puzzleBoard = document.createElement("div")

        //containor setting
        puzzleBoard.id = "Puzzle" + i
        puzzleBoard.style = "width: 31% ; height: 31%;"
        puzzleBoard.style.color = "white"
        puzzleBoard.style.margin = "2px"   
        puzzleBoard.style.border = "1px solid white"
        puzzleBoard.style.backgroundColor = "white"


        //img Source 
        puzzleBoard.style.backgroundImage = "url(images/sampleImg_"+i+".jpg)";
        puzzleBoard.style.backgroundRepeat = "no-repeat"
        puzzleBoard.style.backgroundSize = "cover"

        //drag & drop Options
        puzzleBoard.draggable = "true"
        puzzleBoard.ondragstart = getImgSourceEvent
        puzzleBoard.ondragover = dragOverEvent
        puzzleBoard.ondrop = setImgSourceEvent

        document.getElementById("startZone").appendChild(puzzleBoard)
    }
}
makePuzzleBox();

function makeAnswerBox(){
    for (var i = 1 ; i < 10; i++){
        var puzzleBoard = document.createElement("div")

        //containor setting
        puzzleBoard.id = "Puzzle" + (i+9)
        puzzleBoard.style = "width: 31% ; height: 31%;"
        puzzleBoard.style.color = "white"
        puzzleBoard.style.margin = "2px"   
        puzzleBoard.style.border = "1px solid white"
        puzzleBoard.style.backgroundColor = "white"

        //answer zone setting(no base images)/
        //basic settings only
        puzzleBoard.style.backgroundSize = "cover"
        puzzleBoard.style.backgroundRepeat = "no-repeat"

        //drag & drop Options
        puzzleBoard.draggable = "true"
        puzzleBoard.ondragstart = getImgSourceEvent
        puzzleBoard.ondragover = dragOverEvent
        puzzleBoard.ondrop = setImgSourceEvent

        document.getElementById("answerZone").appendChild(puzzleBoard)
    }
}

makeAnswerBox();


function getImgSourceEvent(event){//get img source from picked cell
    var target = event.target
    imgSource = window.getComputedStyle(target).backgroundImage
    console.log(imgSource)

    lastDraggedCell = target.id
    console.log(target.id)
    
}

function dragOverEvent(event){//prevent Default
    event.preventDefault()
}

function setImgSourceEvent(event){//change img source 
    var target = event.target    
    beforeImgCell = window.getComputedStyle(target).backgroundImage //get before img from cell

    target.style.backgroundImage = imgSource // set new img
    console.log(beforeImgCell)//checking beforImgsource

    var beforeCell = document.getElementById(lastDraggedCell)
    beforeCell.style.backgroundImage = beforeImgCell
    resetBeforeImg()
}

function resetBeforeImg(){
    imgSource = null;
    beforeImgCell = null;
    lastDraggedCell = null;

}


function getRandomIndexNumber(){
    var random = indexList.push()
} 