import React from "react";
import "./bookcard.css"

export default function BookCard(props) {
    return (
        <div className="book-card">
            <img src={props.image} alt={props.title} />
            <h2>Book name:{props.title}</h2>
            <p>Author:{props.author}</p>
            <p>Year:{props.year}</p>
        </div>
    );
}
