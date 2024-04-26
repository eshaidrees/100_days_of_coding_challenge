function logGreeting(): void {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour < 12) {
        console.log("Good Morning");
    }

}

logGreeting()