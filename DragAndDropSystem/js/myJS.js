function drag(e){
    e.dataTransfer.setData("Text", e.target.id);
    console.log("Item dragged occurs");
}
function allowDrop(e){
    e.preventDefault();
}
function drop(e){
    e.preventDefault();
    dragObject = e.dataTransfer.getData("Text");
    e.target.appendChild(document.getElementById(dragObject));
}