let birds = Array.from(document.querySelectorAll(".answer__zone--Bird"));
let ropes = Array.from(document.querySelectorAll(".answer__zone--rope >div"));
let birdBox = document.getElementById("answer__zone--selectBird");
let resetButton = document.getElementById(`resetButton`);
let question = document.getElementById("question__zone--Q");
let startGame_button = document.querySelector("#start__Button");
let Bird_needed;
// document.body.addEventListener("drop",()=>{
//     let dragging_bird = document.querySelector(`.dragging_bird`);
//     console.log(dragging_bird);
//     dragging_bird.remove();
//     createNewBird();
// })

// const gameLoading=()=>{

    // document.body.removeChild(startGame_button.parentElement);
    // birdBox.setAttribute(`style`,`display:grid`)
    const draggingOn = (event)=>{
            event.target.classList.add("dragging_bird");
    }
    const draggingOff= (event)=>{
        event.target.classList.remove("dragging_bird");
    }


    const createNewBird = ()=>{
        if(birdBox.childElementCount<3)
        {
            let newBird = document.createElement("div");
            newBird.classList.add(`answer__zone--Bird`);
            newBird.setAttribute("draggable",`true`);
            newBird.addEventListener("dragstart",draggingOn);
            newBird.addEventListener("dragend",draggingOff);
            birdBox.append(newBird);
        }
        
    }
    const birdsOnRope__style=(event)=>{
            let posLeft =  12.5;
            
            for(let i=0;i<event.target.childNodes.length;i++)
            {
                if(i===0){
                    event.target.firstElementChild.setAttribute("style",`left: ${posLeft}%`);
                    // console.log(posLeft);
                }
                if(i>0){
                    posLeft += 10;
                    event.target.lastElementChild.setAttribute("style",`left: ${posLeft}%`);
                    // console.log(posLeft);
                }
            }
    }
    
    const createBirdOnRope=(event)  =>{
            event.preventDefault();
            // console.log(event.target);
            if(event.target.childNodes.length<8){

                let draggingBird = document.querySelector(".dragging_bird");
                draggingBird.classList.add("birdOnRope");
                console.log
                event.target.appendChild(draggingBird);
                birdsOnRope__style(event);
                createNewBird();
                // console.log(event.target.childNodes);
            }
            else{
                alert("Too many birds on the rope");
            }
            event.target.classList.remove("ropes__glow");
            event.target.setAttribute("style","display:flex;");

    }



    for (let b of  birds){
            b.addEventListener("dragstart",draggingOn);
            b.addEventListener("dragend",draggingOff);
    }
    for (let r of ropes){
            r.addEventListener("dragover",(event)=>{
                event.preventDefault();
            r.classList.add("ropes__glow")

            })
            r.addEventListener("dragleave",(event)=>{
                event.preventDefault();
            r.classList.remove("ropes__glow");
            })
            r.addEventListener("drop",createBirdOnRope);
            
    }


    resetButton.addEventListener("click",()=>{

        for (let i=0;i<ropes.length;i++){
            while(ropes[i].firstChild)
            {
                ropes[i].removeChild(ropes[i].firstChild);
            }
        }
    })

    const createFraction=()=>{
        let numtop = Math.floor(Math.random()*30+1);
        let numbottom = Math.floor(Math.random()*30+1);
        while(numtop>numbottom){
            numtop = Math.floor(Math.random()*10+1);
            numbottom = Math.floor(Math.random()*10+1);
        }
        return `${numtop}/${numbottom}`
    }

    // const question_paragraph = ()=>{
        let Bird_index=  Math.floor(Math.random()*3);
        let fraction = document.createElement("div");
        let fraction_text = document.createTextNode(`${createFraction()}`);
        fraction.append(fraction_text);
        Bird_needed = birds[Bird_index].classList[1];

        let question_Text = document.createTextNode(`
        Put ${fraction.textContent} ${Bird_needed} Birds on the Wires
        `)
        question.append(question_Text);
    // }

    const didIGetIt =()=>{
        let sumOf_Birds_total=0;
        let sumOf_Birds_needed=0;
        let sumOf_Birds_general=0;
        for (let i =0;i<ropes.length;i++){
            sumOf_Birds_total+= ropes[i].childElementCount;
            for(let j=0;j<ropes[i].childNodes.length;j++)
            {
                if(ropes[1].childNodes[0].classList[1]==Bird_needed)
                {
                    sumOf_Birds_needed++;
                }
                else{
                    sumOf_Birds_general++;
                }
            }
        }
        console.log(sumOf_Birds_total,sumOf_Birds_needed,sumOf_Birds_general);
    }



// }
// startGame_button.addEventListener("click",gameLoading);
// console.log(draggingBird);