let inp = document.querySelector("input");
let btn = document.querySelector("button");


let area = document.querySelector(".area")
let ball = document.querySelector(".ball")



window.addEventListener("keyup",function(ev){
    if (ev.key == "ArrowUp") {
    }
    if (ev.key == "ArrowRight") {
       
        ball.style.left = Number(parseInt(ball.style.left)) + 20 + "px"
    }
})


console.log(parseInt("15a1"));
