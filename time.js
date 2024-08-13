// Function to get the current time in PST
function getPSTTime() {
    const now = new Date();
    const utcOffset = now.getTimezoneOffset() * 60000; // UTC offset in milliseconds
    const pstOffset = -7 * 60 * 60000; // PST is UTC-8
    return new Date(now.getTime() + utcOffset + pstOffset);
}

// Function to update the task based on the time
function updateTask() {
    const currentDate = getPSTTime();
    const currentTime = currentDate.toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true });
    
    //LATER UPDATE: task scheduler
    
    //const hours = currentDate.getHours();
    // let task;

    // if (hours >= 8 && hours < 9) {
    //     task = "Time for coding!";
    // } else if (hours >= 9 && hours < 10) {
    //     task = "Time for reading!";
    // } else {
    //    task = "Free time!";
    // }


    time = "It is currently "+currentTime+" PST."

    document.getElementById("time").textContent = time;
    //document.getElementById("task").textContent = task;
}

// Run the function to set the initial task
updateTask();

// Optionally, you can update the task every minute or so
setInterval(updateTask, 60000); // Update every 60 seconds