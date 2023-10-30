let input = document.querySelector("#inputBox");
let buttons = document.querySelectorAll('button');

let string = "";
//jitne bhi buttons hai unka array ban aa ange 
let arr = Array.from(buttons);
//button pe for Each loop run nhi kr skte esliye array create kiya 
//ab ham es array pe for each loop run kr aange 
arr.forEach(button =>{
 //jb bhi button pe click kr aga tho ek event hoga 
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
          //eval ek in build function hai 
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string; 
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})