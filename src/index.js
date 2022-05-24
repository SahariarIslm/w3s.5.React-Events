import React from 'react';
import ReactDOM from 'react-dom/client';

// events

function Football(){
    const shoot = () => {
        alert("Great Shot");
    }
    return(
        <button onClick={shoot} >Take the shot!</button>
    )
}

// Passing Arguments
function Football2(){
    const shoot = (a) =>{
        alert(a);
    }
    return(
        <button onClick={()=>shoot("goal")} >Take the shot!</button>
    );
}

// React Event Object
// Event handlers have access to the React event that triggered the function.
// In our example the event is the "click" event.

function Football3(){
    const shoot = (a,b)=>{
        alert(b.type);
    }
    return(
        <button onClick={(event)=>shoot("goal",event)} >Take the shot!</button>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football3/>)