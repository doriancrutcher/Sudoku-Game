// General Selectors
let rowSelect='';
let colSelect='';


// DOM Element Selector
var node=document.querySelector('.col');
const row1= document.getElementById('row1');
const num=document.querySelector('.numberSelector');
const Container=document.querySelector('.container');
const submit=document.getElementById('check')


//Event Listeners
window.addEventListener('click',function(e){

})
    Container.addEventListener('click',function(e){
       
    
        e.target.style.background='green';
        colSelect= e.target.classList[1][3];
        rowSelect= e.target.parentNode.id;
        console.log(`row ${rowSelect} and col ${colSelect}`)
        
    
      

    })

num.addEventListener('click',function(e){
    document.getElementById(rowSelect).getElementsByTagName('div')[colSelect-1].innerText=e.target.innerText
    
})
window.onload=function(){
    starterNumbers();
   
}

submit.addEventListener('click',solutionCheckerRow)

// Functions


function addNum(){
    document.querySelector(row1)
}

function solutionCheckerRow(){
   

    let rowCheck=[];
    for(let i=1; i<10;i++){
       for(let j=0; j<9;j++){
           
 
                let cellNum = document.getElementById('row'+i).getElementsByTagName('div')[j].innerHTML

                if(rowCheck.length===9){
                    rowCheck=[];}
                    console.log(cellNum)

                if (rowCheck.includes(cellNum)){
                    console.log(rowCheck.length)
                    return alert('row fail at row'+i)
                }


                rowCheck.push(cellNum)
                  }
          
           

         }
    
    return solutionCheckerCol()
}

function solutionCheckerCol(){
    let colCheck=[];
    for(let j=0; j<9;j++){
        for(let i=1;i<10;i++){
            
            let cellNum = document.getElementById('row'+i).getElementsByTagName('div')[j].innerHTML
                            console.log(colCheck)
            if(colCheck.length===9){
          
                colCheck=[];

            }
            let colVal=j+1
            if (colCheck.includes(cellNum)){return alert('column fail at col'+colVal)}
            

            
            colCheck.push(cellNum)
            
           
       
            
        }
    }
    return checkthreebythree()
}

function checkthreebythree(z=0,y=0){
    let cubeCheck=[];
    if (z===6){
        z=0;
        y+=3
    }
    for(let i=1+z; i<4+z; i++){
        for(let j=0+y; j<3+y; j++){
            
            let cellNum = document.getElementById('row'+i).getElementsByTagName('div')[j].innerHTML
                        if(cubeCheck.length===9){
                console.log('cube cleared')
                cubeCheck=[];
            }
            
            if(cubeCheck.includes(cellNum)){return alert('cube fail')}
            

            
            cubeCheck.push(cellNum);
            
        
        }
    }
    if(z===3&&y===3){
        alert('you win!')
    }
    else{
        z+=3
        return checkthreebythree(z,y)
    }
}

function starterNumbers(){
    
    for(let i=1; i<10; i++){
        document.getElementById('row'+i).getElementsByTagName('div')[Math.floor(Math.random()*10)].innerHTML=i
        
    }
}

