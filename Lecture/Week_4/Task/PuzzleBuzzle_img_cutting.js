// var reader = new FileReader();
// function inputFile(e){
//     var fileinput = document.getElementById("fileInput");
//     fileinput.onchange = console.log(e.target.files);
//     reader.readAsDataURL(e.target.files[0]);
//     // reader.onload = changeImg();
    
// }

// reader.onload = function changeImg(){
//     var photoFrame = document.createElement("div");
//     photoFrame.style = 'background : url({reader.result}); background-size : cover';
//     photoFrame.className = "photoFrame";
//     document.getElementById("startZone").appendChild(photoFrame)
// }

// var reader = new FileReader();

// function inputFile(e) {
//     var fileinput = document.getElementById("fileInput");
//     fileinput.onchange = function() {
//         var file = e.target.files[0];
//         if (file) {
//             reader.readAsDataURL(file);
//         }
//     };

//     reader.onload = function() {
//         var photoFrame = document.createElement("div");
//         photoFrame.style.background = `url(${reader.result})`;
//         photoFrame.style.backgroundSize = 'cover';
//         photoFrame.className = "photoFrame";
//         document.getElementById("startZone").appendChild(photoFrame);
//     };
// }


document.getElementById("fileInput").addEventListener('change', inputFile);

function inputFile(e) {
    var file = e.target.files[0];
    if (file) {
        var reader = new FileReader();
        
        reader.onload = function() {
            var photoFrame = document.createElement("div");
            photoFrame.style.background = `url(${reader.result})`;
            photoFrame.style.backgroundSize = 'cover';
            photoFrame.className = "photoFrame";
            document.getElementById("fuckyou").appendChild(photoFrame);
        };
        
        reader.readAsDataURL(file);
    }
}
// fuck you mother fkr