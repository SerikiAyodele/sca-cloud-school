// Change to http://localhost:8080 when in development
const host = "http://a8733bace72794505808ff0306c0c5db-2121489697.eu-west-2.elb.amazonaws.com";

document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
});

document.getElementById("submit").addEventListener("click", function() {
  let name = document.getElementById("name").value;
  let textElement = document.getElementById("text");
  sendMessage(name, textElement.value);
  textElement.value = "";
});

// TODO: Use Server-Sent Events or WebSockets
getMessages();
setInterval(() => {
  getMessages();
}, 5000);

async function sendMessage(name, text) {
  let message  = {name, text};
  await fetch(`${host}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  });
  getMessages();
}

async function getMessages() {
  let messages = await fetch(`${host}/messages`);
  let messagesJSON = await messages.json();
  let element = document.getElementById("messages");
  element.innerHTML = "";
  for (let message of messagesJSON) {
    element.innerHTML += `<div><span class="datetime">${message.date}</span> <b>${message.name}:</b> ${message.text}</div><br>`;
  }
}