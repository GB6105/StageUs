
function hideFoldingBox(n){
    document.getElementById("foldingBox"+n).style.display = "none"
}

function hideAllFoldingBox(){
    for (var i = 1; i < 9; i++){
        hideFoldingBox(i);
    }
}

hideAllFoldingBox();

function hoverFoldingbox(n){
    document.getElementById("foldingBox"+n).style.display = "block"
}