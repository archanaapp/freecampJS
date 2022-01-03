let saveEl  = document.getElementById("save-el")

let countEl  = document.getElementById("count-el")
let count = 0;



function increment(){
    console.log("button clicked");
    count += 1;
    countEl.innerText = count;
  
    
}

function save() 
{   
    console.log(count);
    let countStr =   count + "-";
    saveEl.textContent += " "+countStr;
    console.log("save button clicked");
    
}