
//1. #000000 or 000000
//2. check the length - should be either 3 or 6 characters

//Get a reference to hexInput and inputColor DOM elements
//Create a keyup event handler for hexInput
//Check if hex color is valid
//If hex color is valid, update the background color of inputColor

function checkInput(){
    let userInputHex = document.querySelector("#color--hex")
    let userInputColor = document.querySelector("#inputColor")
    if (userInputHex.value.length>=3 && userInputHex.value.length<=7){
        console.log(true)
        if(userInputHex.value.startsWith("#",0)){
            console.log("Here")
            userInputColor.style.backgroundColor = userInputHex.value
            
        }else{
            console.log("Does not start with #")
            let newStr = "#" + userInputHex.value
            userInputHex.value = newStr
            userInputColor.style.backgroundColor = newStr

        }

    }else{
        console.log("Less than 3 or more than 6 chars")
        return false
    }
}
