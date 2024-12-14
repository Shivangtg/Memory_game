import Controller from "./js/controller.js";
import Element from "./js/elements.js";

let cellNumSelector=document.querySelector(".select-number-of-cells");
let playground=document.querySelector(".playground");
let gameControls=new Controller(playground,cellNumSelector.value);
let start_over=document.querySelector(".final-btn");
let wrong=document.querySelector(".wrong");
let restart_btn=document.querySelector(".restart-btn");



function dynamic_time(){
    let current_time=new Date();
    let minutes_lable=document.querySelector(".timer span:nth-child(1)");
    let seconds_lable=document.querySelector(".timer span:nth-child(2)");
    let dynamic_difference=current_time-gameControls.elements.start_time;
    const minutes = Math.floor((dynamic_difference / (1000 * 60)) % 60);
    const seconds = Math.floor((dynamic_difference / 1000) % 60);
    minutes_lable.textContent=`${minutes}`;
    seconds_lable.textContent=`${seconds}`;
    requestAnimationFrame(dynamic_time);
}
requestAnimationFrame(dynamic_time);

// console.log(playground)
// console.log(cellNumSelector);
// console.log(gameControls);
cellNumSelector.addEventListener("change",(e)=>{
    console.log("hi");
    let playground=document.querySelector(".playground");
    playground.innerHTML='';
    
    // const newGame=new Controller(cellNumSelector.value)
    const newGame=new Controller(playground,e.target.value);
    wrong.innerHTML=`${newGame.wrong_attempts}`;
    function dynamic_time(){
        let current_time=new Date();
        let minutes_lable=document.querySelector(".timer span:nth-child(1)");
        let seconds_lable=document.querySelector(".timer span:nth-child(2)");
        let dynamic_difference=current_time-newGame.elements.start_time;
        const minutes = Math.floor((dynamic_difference / (1000 * 60)) % 60);
        const seconds = Math.floor((dynamic_difference / 1000) % 60);
        minutes_lable.textContent=`${minutes}`;
        seconds_lable.textContent=`${seconds}`;
        requestAnimationFrame(dynamic_time);
    }
    requestAnimationFrame(dynamic_time);
    
})




restart_btn.addEventListener("click",(e)=>{
    
    console.log("hi");
    let playground=document.querySelector(".playground");
    playground.innerHTML='';
    
    // const newGame=new Controller(cellNumSelector.value)
    const newGame=new Controller(playground,cellNumSelector.value);
    wrong.innerHTML=`${newGame.wrong_attempts}`;
    
    function dynamic_time(){
        let current_time=new Date();
        console.log(current_time,newGame.elements.start_time)
        let minutes_lable=document.querySelector(".timer span:nth-child(1)");
        let seconds_lable=document.querySelector(".timer span:nth-child(2)");
        let dynamic_difference=current_time-newGame.elements.start_time;
        const minutes = Math.floor((dynamic_difference / (1000 * 60)) % 60);
        const seconds = Math.floor((dynamic_difference / 1000) % 60);
        minutes_lable.textContent=`${minutes}`;
        seconds_lable.textContent=`${seconds}`;
        requestAnimationFrame(dynamic_time)
    }
    
    requestAnimationFrame(dynamic_time)
})




start_over.addEventListener("click",(e)=>{
    
    console.log("hi");
    document.querySelector(".final_screen_container").style.visibility="hidden";
    let playground=document.querySelector(".playground");
    playground.innerHTML='';
    
    // const newGame=new Controller(cellNumSelector.value)
    const newGame=new Controller(playground,cellNumSelector.value);
    
    wrong.innerHTML=`${newGame.wrong_attempts}`;
    function dynamic_time(){
        let current_time=new Date();
        console.log("shivang",current_time,newGame.elements.start_time)
        let minutes_lable=document.querySelector(".timer span:nth-child(1)");
        let seconds_lable=document.querySelector(".timer span:nth-child(2)");
        let dynamic_difference=current_time-newGame.elements.start_time;
        const minutes = Math.floor((dynamic_difference / (1000 * 60)) % 60);
        const seconds = Math.floor((dynamic_difference / 1000) % 60);
        minutes_lable.textContent=`${minutes}`;
        seconds_lable.textContent=`${seconds}`;
        requestAnimationFrame(dynamic_time)
    }
    requestAnimationFrame(dynamic_time)
    
})

// cellNumSelector.value="36"
// console.log(cellNumSelector)