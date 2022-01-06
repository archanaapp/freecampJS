const p1 = document.getElementById("ptag1");

function myFunction(name, team) {

    p1.textContent = ("hello " + name + " welcome you are in " + team );
}

myFunction("Archana", "green")





function getFirst(arr) {
    return arr[0]
       
}


let firstCard = getFirst([10,20,30,40])

console.log(firstCard)