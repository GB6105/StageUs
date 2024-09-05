var level;

function Level(n){
    level = n;
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
        puzzleBoard.draggable = "true";
        puzzleBoard.className = "puzzleBoard"
        puzzleBoard.style = "width:" + (90/level)+"%; height:" + (90/level)+"%;"
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
        imageSource.src = "images/level" + level + "/sampleImg_" + arr[i] +".jpg";
        document.getElementById(i+1).appendChild(imageSource);
    }
}
