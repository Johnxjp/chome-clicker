function sendMessage() {
    console.log("Sending Message");
    chrome.runtime.sendMessage({message: "Click Event Detected"});
};

document.body.addEventListener("click", sendMessage, true);

