let h1 = document.querySelector("h1");
total = 0;

let interval =null;



function counter(){
    total++;
    h1.innerHTML = total;
}

function counterBack(){
    total--;
    if(h1.innerHTML <0){
        h1.innerHTML = -total;
    }
    else{
        h1.innerHTML = total;
    }
}

function StartBtn(){
let StartBtn =  document.getElementById("start");
    
let StopBtn =  document.getElementById("stop");
   StartBtn.addEventListener("click", ()=>{

    StartBtn.style.display = "none";
    StopBtn.style.display = "block";

     interval =  setInterval(function(){
            counter()
        },1000)
    })
}


function StopBtn(){
    let StartBtn =  document.getElementById("start");
        
    let StopBtn =  document.getElementById("stop");

       StopBtn.addEventListener("click", ()=>{


        StopBtn.style.display = "none";
    
        StartBtn.style.display = "block";

        clearInterval(interval);

        })
    }



    let forward = document.getElementById("forward");
    let back = document.getElementById("back");

    function forw(){
        forward.addEventListener("click", ()=>{
            
            clearInterval(interval);
            
            setTimeout(function(){
                counter()
            },1000)
        })
    }


    function bac(){
        back.addEventListener("click", ()=>{
            
            clearInterval(interval);
            counterBack()
            setTimeout(function(){
            },1000)
        })
    }

bac();
forw();
StopBtn()
StartBtn();