


let userInputHex = document.querySelector("#color--hex")
let userInputColor = document.querySelector("#inputColor")
let userInputSlider = document.querySelector("#myRange")
let userInputSliderText = document.querySelector("#color--slider-text")
let alteredColorEle = document.querySelector("#alteredColor")

userInputHex.addEventListener("keyup", ()=>{
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
        alert("Not valid Hex. Less than 3 or more than 6 chars")
        return false
    }
})


//Create a function to convert Hex to RGB
//this should work with 3 or 6 character hex values
//Hint - use parseInt("", 16) to convert a hex value to a decimal value
//should return an object with 3 properties - r,g, and b
//Test your function with a few different use cases



function hexToRGB(hex){
    
    try{
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        return result?{
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null
    }catch(e){
        console.log(e)
    }
    

}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }


function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }


  
function alterColor(hexValue, percetange){
    const {r,g,b} = hexToRGB(hexValue)

    let amount = Math.floor((percetange /100) * 255)

    let newR = checkColorRange(r, amount)
    let newG = checkColorRange(g, amount)
    let newB = checkColorRange(b, amount)

    
    let finalHexValue = rgbToHex(newR, newG, newB)
    console.log(finalHexValue)
    return finalHexValue
}

function checkColorRange(hex, amount){
    /*let newHex = hex + amount
    if (newHex>255){
        return 255
    }else if(newHex<0){
        return 0
    }else{
        return newHex
    }*/

    return Math.min(255, Math.max(0, hex + amount)) //[255, 0]
}

userInputSlider.addEventListener("input", ()=>{
    userInputSliderText.textContent = userInputSlider.value + "%"
    let newAlteredColor = alterColor(userInputHex.value, userInputSlider.value)
    alteredColorEle.style.backgroundColor = newAlteredColor
})

