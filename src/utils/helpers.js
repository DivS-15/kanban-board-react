
export const groupBy = (data, key) => {
    return data.reduce((result, item) => {
        const groupKey = item[key];
        if (!result[groupKey]) result[groupKey] = [];
        result[groupKey].push(item);
        return result;
    }, {});
};

export const sortTickets = (tickets, sortBy) => {
    return tickets.sort((a, b) => {
        if (sortBy === "priority") {
            return b.priority - a.priority;
        }
        if (sortBy === "title") {
            return a.title.localeCompare(b.title);
        }
        return 0;
    });
};

export const getPriorityLabel = (priority) => {
    const labels = ["No priority", "Low", "Medium", "High", "Urgent"];
    return labels[priority] || "Unknown";
};
