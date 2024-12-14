import Elements from "./elements.js";

class Controller{
    constructor(playground,cardsNumber){
        this.elements=new Elements(playground,cardsNumber);
        this.covers=document.querySelectorAll(".cover");
        this.count=0;
        this.wrong_attempts=0;
        // for(let i=0;i<this.covers.length;i++){
        //     this.covers[i].addEventListener("click",this.interation(this.covers));
        // }
        this.interation(this.covers,this.count,this.wrong_attempts,this.elements)
    }

    interation=function(list1,count,wrong_count,elements){    
        
        
        
        for(let i=0;i<list1.length;i++){
            
            list1[i].addEventListener("click",function(e){
                console.log(count)
                count++;
                
                // console.log(e.target.parentElement.style)
                e.target.parentElement.style.animation="spin 0.5s 1"
                setTimeout(function(){
                    e.target.parentElement.style.animation=""
                    e.target.style.zIndex="-1";
                },500)
                e.target.classList.add("active")

                if(count==2){
                    let to_compare=[];
                    let classList=[];
                    for(let i=0;i<list1.length;i++){
                        if(list1[i].classList.contains("active")){
                            to_compare.push(list1[i])
                            classList.push(list1[i].parentElement.classList[0])
                            classList.push(list1[i].parentElement.classList[1])
                        }
                        
                    }
                    let equal=0
                    if(classList[0]!=classList[2] || classList[1]!=classList[3]){
                        to_compare[0].classList.remove("active");
                        to_compare[1].classList.remove("active")
                        wrong_count++;
                        
                        document.querySelector(".wrong").textContent=`${wrong_count}`;
                        setTimeout(() => {

                            to_compare[0].parentElement.style.animation="antispin 0.5s 1";
                            to_compare[1].parentElement.style.animation="antispin 0.5s 1";
                            to_compare[0].style.zIndex="4";
                            to_compare[1].style.zIndex="4";
                        }, 550);  
                    }else{
                        equal=1;
                        to_compare[0].classList.remove("active");
                        to_compare[1].classList.remove("active")
                        to_compare[0].classList.add("dead");
                        to_compare[1].classList.add("dead")

                    }
                    setTimeout(() => {
                    to_compare=[];
                    classList=[];
                    for(let i=0;i<list1.length;i++){
                        if(list1[i].classList.contains("active") && (!list1[i].classList.contains("dead"))){
                            to_compare.push(list1[i])
                            classList.push(list1[i].parentElement.classList[0])
                            classList.push(list1[i].parentElement.classList[1])
                        }
                        
                    }
                    
                   
                    // if()
                    count=0;
                    }, 550);
                    setTimeout(()=>{
                        console.log("shivang",classList,to_compare);
                        console.log()
                    })
                    
                    
                }
                let deadcount=0;
                for(let i=0;i<list1.length;i++){
                   
                    if(list1[i].classList.contains("dead")){
                        deadcount++;
                    }

                }
                if(deadcount==list1.length){
                    let finish_time=new Date();
                    let difference=finish_time-elements.start_time
                    const minutes = Math.floor((difference / (1000 * 60)) % 60);
                    const seconds = Math.floor((difference / 1000) % 60);
                    document.querySelector(".final_screen_time span").textContent=document.querySelector(".final_screen_time span").textContent+`${minutes}:${seconds}`
                    console.log("win")
                    document.querySelector(".final_screen_container").style.visibility="visible";
                    
                }
            })

        }
        
        
    }

    
}

export default Controller
