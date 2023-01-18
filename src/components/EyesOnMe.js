// Code EyesOnMe Component Here
import React from "react"


function EyesOnMe (){

    function friendBlur(e){
        console.log("Hey! Eyes on me!");
    }
    function handleFocus(e){
        console.log("Good!");
    }
    
    return(
        <div>
            <button onFocus={handleFocus} onBlur={friendBlur}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;