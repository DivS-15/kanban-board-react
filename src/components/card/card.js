// src/components/Card/Card.js
import React from "react";
import "./card.css";
import { getPriorityLabel } from "../../utils/helpers";

const Card = ({ ticket }) => {
    return (
        <div className="card">
            <h3>{ticket.title}</h3>
            <p>Tag: {ticket.tag.join(", ")}</p>
            <p>Priority: {getPriorityLabel(ticket.priority)}</p>
        </div>
    );
};

export default Card;
