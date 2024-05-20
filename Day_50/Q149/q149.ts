console.log("Start");

setTimeout(() => {
    console.log("Timeout callback executed") // This gets queued to be executed by the event loop
},0)

console.log("End");

