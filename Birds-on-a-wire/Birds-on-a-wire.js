let birds = document.getElementById('birdbox');
let containers = document.querySelectorAll ('.container'); 

const dragqueen = (event) => {
    console.log(event);
    if(event.type==="dragend"){
        console.log("hoiuhiu");
    }

}
// const dragqueer = (event) => {
//     console.log(event);
//    console.log("fhfd");
// }

for (let i=0; i<3; i++) {
    birds.children[i].addEventListener("dragstart", dragqueen);
    birds.children[i].addEventListener("dragend", dragqueen);
}





// } (draggable => {
//     console.log(draggable)
//     draggable.addEventListner('draggstart',() => {
//         console.log('drag start');
//     })
// })
    

// draggable.for each (draggable {
//     draggables.addEventListner('draggstart', () {
//     draggables.classList.add('.dragging')
// })
// draggabls.addEventListner.('dragend', () {
//     draggable.classList.remove('dragging')
// })
// }


// let wirebox = document.getElementById('wirebox');
// let wire = document.getElementsByClassName(wire);
// wirebox.forEach (wire) {
// wirebox.addEventListner('dragover',() {
//     console.log("drag over")  
// })

// }
