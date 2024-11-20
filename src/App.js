import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchTickets } from "./utils/api";
import { groupBy, sortTickets } from "./utils/helpers";
import Header from "./components/header/header";
import Board from "./components/board/board";

function App() {
    // Define state for tickets, grouping, and sorting
    const [tickets, setTickets] = useState([]);
    const [grouping, setGrouping] = useState("status");
    const [sorting, setSorting] = useState("priority");

    // Load tickets from the API
    useEffect(() => {
        const loadTickets = async () => {
            const data = await fetchTickets();
            setTickets(data.tickets || []);
        };
        loadTickets();
    }, []);

    // Save grouping and sorting to localStorage when they change
    useEffect(() => {
        localStorage.setItem("grouping", grouping);
        localStorage.setItem("sorting", sorting);
    }, [grouping, sorting]);

    // Load grouping and sorting from localStorage on app load
    useEffect(() => {
        const savedGrouping = localStorage.getItem("grouping") || "status";
        const savedSorting = localStorage.getItem("sorting") || "priority";
        setGrouping(savedGrouping);
        setSorting(savedSorting);
    }, []);

    // Group and sort tickets
    const groupedTickets = groupBy(sortTickets([...tickets], sorting), grouping);

    return (
        <div className="App">
            <Header setGrouping={setGrouping} setSorting={setSorting} />
            <Board groupedTickets={groupedTickets} />
        </div>
    );
}

export default App;
