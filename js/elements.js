class Elements {
    constructor(playground,cardsNumber){
        this.playground=playground;
        this.cardsNumber=cardsNumber;
        this.cells=[];
        this.generateCells(this.playground,this.cardsNumber);
        this.start_time=new Date();
        let final_list=this.randomize(this.cells);
        console.log();
        console.log(this.cells)
        this.addingCover(this.cells)
        // console.log(this.final_cell_list)
        for(let i=0;i<this.cells.length;i++){
            this.playground.append(final_list[i]);
        }
        
        this.cells=final_list;
    }
     
    generateCells=function(playground,cardsNumber){
        

        // notice the use of camel case here for css properties it 
        // is standerdised in the .style object playground.style["grid-template-rows"] won't work
        playground.style["gridTemplateRows"]=Math.sqrt(cardsNumber)
        playground.style["gridTemplateColumns"]=Math.sqrt(cardsNumber)
        //didn't worked as gridTemplateRows/Columns requires numbers with units like "40px 40px" 
        // "1fr 1fr 2fr 3fr", and
        //Math.sqrt(cardsNumber) has no units so correcting the code
        const gridSize=Math.sqrt(cardsNumber)

        playground.style["gridTemplateRows"]=`repeat(${gridSize},1fr)`
        playground.style["gridTemplateColumns"]=`repeat(${gridSize},1fr)`
        

        
        for(let i=0;i<cardsNumber;i++){
            let cell=document.createElement("div");
            cell.classList.add("cell");
            let cell_image=document.createElement("div");
            cell_image.classList.add(`card_image`);
            if(i<cardsNumber/2){
                cell_image.innerHTML=`<img src="images/icon-${i+1}.png" alt="" width="80%">`;
                cell.classList.add(`card${i+1}`);
            }else{
                cell_image.innerHTML=`<img src="images/icon-${cardsNumber-i}.png" alt="" width="80%" >`;
                cell.classList.add(`card${cardsNumber-i}`);
            }
            console.log(playground)
            cell.style.width=`calc(${90/gridSize}vmin-1rem)`
            cell.style.height=`calc(${90/gridSize}vmin-1rem)`
            cell.style.position="relative";
            cell.append(cell_image);
            this.cells.push(cell);
        }
        console.log()
        // console.log(playground.children[0].classList)
        // playground.children[0].classList.value=playground.children[2].classList.value
        // console.log(playground.children[0].classList)
        // // randomizing cards 
        
    }
    randomize=function(array){
        let output=[]
        
        for(let i=0;i<array.length;i++){
            output.push(array[i])
        }
        for(let i=0;i<array.length;i++){
            for(let j=0;j<array.length;j++){
                if(Math.random()-0.5>0){
                    let temp=output[j];
                    output[j]=output[i];
                    output[i]=temp;
                    
                }
            }
        }
        
        return output
    }
    addingCover=function(array){
        for(let i=0;i<array.length;i++){
            let cover=document.createElement("div");
            cover.style.position="absolute";
            array[i].innerHTML=`<div class="cover"></div>${array[i].innerHTML}`
        }
    }
}

export default Elements
