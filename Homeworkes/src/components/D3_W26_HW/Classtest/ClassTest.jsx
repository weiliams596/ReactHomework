import React from'react';

export default function ClassTest() {
    const onClick = ()=>{
        alert('You clicked me!');
    };
    return(
        <main>
            <h1>Class Test</h1>
            <button onClick={onClick}>Click Me</button>
        </main>
    );
}