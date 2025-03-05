import React from "react";

export default function Header(props){
    return(
        <header>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>{props.author}</p>
        </header>
    );
}