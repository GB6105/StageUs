function makePuzzleBox(){
    imgList = []
    for (var i = 1 ; i < 10; i++){
        var puzzleBoard = document.createElement("div")
        puzzleBoard.innerHTML = "smallImg" + i;
        puzzleBoard.style.width = "32%";
        puzzleBoard.style.height = "32%";
        puzzleBoard.style.border = "black"
        puzzleBoard.style.margin = "2px"   
        puzzleBoard.id = "Puzzle" + i
        puzzleBoard.style.backgroundImage = "url(images/sampleImg_"+i+".jpg)";
        // puzzleBoard.style.backgroundImage = `url(images/sampleImg_${i}.jpg)`;
        puzzleBoard.style.backgroundSize = "cover"
        puzzleBoard.style.color = "white"

        puzzleBoard.draggable = "true"
        puzzleBoard.ondragstart = "getImgSourceEvent(event)"
        // puzzleBoard.ondragstart = getImgSourceEvent(evnet);

        document.getElementById("startZone").appendChild(puzzleBoard)
    }
}
makePuzzleBox();

function makeAnswerBox(){
    for (var i = 0 ; i < 9; i++){
        var puzzleBoard = document.createElement("div")
        puzzleBoard.innerHTML = "smallImg"
        puzzleBoard.style.width = "32%";
        puzzleBoard.style.height = "32%";
        puzzleBoard.style.backgroundColor = "white"
        puzzleBoard.style.border = "black"
        puzzleBoard.style.margin = "2px"

        document.getElementById("answerZone").appendChild(puzzleBoard)
    }
}

makeAnswerBox();

var imgSource = null;

// function getImgSourceEvent(){
//     imgSource = puzzleBoard.style.backgroundImage
//     console.log(imgSource)

    
// }


function getImgSourceEvent(event){
    var target = e.target
    imgSource = window.getComputedStyle(target).backgroundImage
    console.log(imgSource)

}