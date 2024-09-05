
var draggedImgSrc;

function Level(n){
    var level = n;
    makePuzzleZone(level,"startZone");
    importImage(level);
    makePuzzleZone(level,"answerZone");
    
}

function makePuzzleZone(level,direction){
    var parent = document.getElementById(direction);
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    for (var i = 1; i < level**2  + 1 ; i++ ){
        var puzzleBoard = document.createElement("div");
        puzzleBoard.id = i;
        puzzleBoard.className = "puzzleBoard"
        puzzleBoard.draggable = "true";
        puzzleBoard.style = "width:" + (90/level)+"%; height:" + (90/level)+"%;"
        puzzleBoard.ondrag = dragOver
        puzzleBoard.ondragend = setImgSrc
        document.getElementById(direction).appendChild(puzzleBoard);
    }
}

function importImage(level){
    var arr =[];
    for (var j = 1; j < level ** 2 + 1; j++){
        arr.push(j);
    }
    arr.sort(() => Math.random() -0.5)

    for (var i = 0; i < arr.length; i++){
        var imageSource = document.createElement("img");
        imageSource.id = "img" + arr[i];
        imageSource.src = "images/level" + level + "/sampleImg_" + arr[i] +".jpg";
        imageSource.draggable = "true";
        imageSource.ondragstart = getImgSrc;
        imageSource.ondrag = dragOver;
        imageSource.ondragend = setImgSrc;
        document.getElementById(i+1).appendChild(imageSource);
    }
}



function getImgSrc(event){
    var draggedImgSrcId = event.target.id;
    // draggedImgSrc = document.getElementsByTagName("img");
    draggedImgSrc = document.getElementById(draggedImgSrcId).src;
    // console.log(draggedImgSrcId)
    console.log(draggedImgSrc)
}

function dragOver(event){
    event.preventDefault()
}

function setImgSrc(event){
    if(,   )
    


}

