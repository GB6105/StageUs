function makePuzzleBox(){
    imgList = []
    for (var i = 1 ; i < 10; i++){
        var puzzleBoard = document.createElement("div")
        // puzzleBoard.innerHTML = "smallImg" + i;
        puzzleBoard.style.width = "31%";
        puzzleBoard.style.height = "31%";
        puzzleBoard.style.border = "1px solid white"
        puzzleBoard.style.margin = "2px"   
        puzzleBoard.id = "Puzzle" + i
        puzzleBoard.style.backgroundImage = "url(images/sampleImg_"+i+".jpg)";
        // puzzleBoard.style.backgroundImage = `url(images/sampleImg_${i}.jpg)`;
        puzzleBoard.style.backgroundSize = "cover"
        puzzleBoard.style.backgroundRepeat = "no-repeat"
        puzzleBoard.style.color = "white"

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
        puzzleBoard.style.width = "31%";
        puzzleBoard.style.height = "31%";
        puzzleBoard.style.border = "1px solid white"
        puzzleBoard.style.margin = "2px"   
        puzzleBoard.id = "Puzzle" + i
        puzzleBoard.style.backgroundColor = "white"

        puzzleBoard.style.backgroundSize = "cover"
        puzzleBoard.style.backgroundRepeat = "no-repeat"
        puzzleBoard.style.color = "white"

        puzzleBoard.draggable = "true"
        puzzleBoard.ondragstart = getImgSourceEvent
        puzzleBoard.ondragover = dragOverEvent
        puzzleBoard.ondrop = setImgSourceEvent

        document.getElementById("answerZone").appendChild(puzzleBoard)
    }
}

makeAnswerBox();

var imgSource = null;
var beforImgSource = null;

function getImgSourceEvent(event){
    var target = event.target
    imgSource = window.getComputedStyle(target).backgroundImage
    console.log(imgSource)

}

function dragOverEvent(event){
    event.preventDefault()
}

function setImgSourceEvent(event){
    var target = event.target
    beforImgSource = window.getComputedStyle(target).backgroundImage
    target.style.backgroundImage = imgSource
    console.log(beforImgSource)
}