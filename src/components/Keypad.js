// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleKey(e){
        console.log("Entering password...");
    }
    return (
        <div>
            <input type="password"  onChange={handleKey} />
        </div>
    )
}

export default Keypad;