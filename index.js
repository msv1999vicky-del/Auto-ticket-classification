function classifyTicket(description) {
    description = description.toLowerCase();

    if (description.includes("password") ||
        description.includes("login")) {
        return "Access Issue";
    }

    if (description.includes("network") ||
        description.includes("internet") ||
        description.includes("wifi")) {
        return "Network Issue";
    }

    if (description.includes("computer") ||
        description.includes("laptop") ||
        description.includes("keyboard")) {
        return "Hardware Issue";
    }

    if (description.includes("software") ||
        description.includes("application") ||
        description.includes("app")) {
        return "Software Issue";
    }

    if (description.includes("printer") ||
        description.includes("print")) {
        return "Printer Issue";
    }

    return "General Issue";
}


// Test different tickets

let tickets = [
    "User cannot login to the system",
    "Internet is not working",
    "My laptop is not working",
    "Software application is not opening",
    "Printer is not printing"
];


// Display results

tickets.forEach(function(ticket) {
    let category = classifyTicket(ticket);

    console.log("Ticket:", ticket);
    console.log("Category:", category);
    console.log("----------------------");
});
