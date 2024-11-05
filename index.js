const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let generate = document.getElementById("generate")
let pass1 = document.getElementById("password1")
let pass2 = document.getElementById("password2")

// console.log("characters: " + characters.length)
console.log(`characters:  ${characters.length}`)

function randomChars(){
    let tempArray =[]
    for(let i = 0; i < 15; i++){
        let rand = Math.floor(Math.random()*characters.length)
        tempArray.push(rand)
    } 
        console.log(`TempArray: ${tempArray}`)
    /*
     temp array holds an array of random numbers rn, 
     we need to assign the values in chars to the values in temp, 
     then turn it into a string
    */
    let tempString='';
    for(let i = 0; i < tempArray.length; i++){
        tempString += (characters[tempArray[i]])
    }
            console.log(`TempString: ${tempString}`)

    return tempString
}

generate.addEventListener("click", function() {
    // need to generate string of 15 characters, all unique from eachother
    pass1.innerText = randomChars()
    pass2.innerHTML = randomChars()
})

