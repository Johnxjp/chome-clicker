function sendMessage() {
    console.log("Sending Message");
    chrome.runtime.sendMessage({greeting: "Click Event Detected"});
};

document.body.addEventListener("click", sendMessage, false);

