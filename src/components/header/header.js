import React from "react";
import "./header.css";

const Header = ({ setGrouping, setSorting }) => {
    return (
        <div className="header">
            <div className="group-options">
                <label>Group By:</label>
                <select onChange={(e) => setGrouping(e.target.value)}>
                    <option value="status">Status</option>
                    <option value="userId">User</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <div className="sort-options">
                <label>Sort By:</label>
                <select onChange={(e) => setSorting(e.target.value)}>
                    <option value="priority">Priority</option>
                    <option value="title">Title</option>
                </select>
            </div>
        </div>
    );
};

export default Header;
