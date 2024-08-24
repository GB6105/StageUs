function makePuzzle(){
    for (var i = 0 ; i < 9; i++){
        var puzzleBoard = document.createElement("div")
        puzzleBoard.innerHTML = "board"
        // puzzleBoard.style.backgroundColor = "red"
        // puzzleBoard.style.border = "white"
        document.getElementById("main").appendChild(puzzleBoard)
    }
}
makePuzzle();