//.getElementById get the id that is in the html
//.querySelectorAll gets all the tags, li, from the html

let result = document.getElementById("output");
let nums = document.querySelectorAll("li");

// A for loop that graps all the li tag
for(let i = 0; i < nums.length; i++) {
    console.log(nums[i].innerHTML)


//addEventListener with the function, does where when you click a button is bring a output
    nums[i].addEventListener("click" ,function(){
        console.log(nums[i].innerHTML);

//named a variable to grab the input from the html
let getvalue = document.getElementById("output").value;
        
// conditional statments to target the "=", "C", and "Del"
//eval takes the string and executes it
    if(nums[i].innerHTML == "="){
        output.value = eval(output.value);
    }
    else{
//When the string "C" is pressed, it gets emptyed from the emetyed string
        if(nums[i].innerHTML == "C"){
            output.value = "";
        }
        else{
            output.value += nums[i].innerHTML;
        }
//Works the same way as the previous one but instead one number gets deleted from the .slice code
        if(nums[i].innerHTML == "Del"){
            output.value=getvalue.slice(0, -1);
            }
        }          
    })
}
            

