// src/components/Board/Board.js
import React from "react";
import "./board.css";
import Card from "../card/card";

const Board = ({ groupedTickets }) => {
    return (
        <div className="board">
            {Object.entries(groupedTickets).map(([key, tickets]) => (
                <div className="column" key={key}>
                    <h2>{key}</h2>
                    {tickets.map((ticket) => (
                        <Card key={ticket.id} ticket={ticket} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Board;
