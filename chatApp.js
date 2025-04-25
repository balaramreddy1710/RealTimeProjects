class ChatApp {
  constructor() {
    this.messages = [];
    this.mId = 1;
  }

  sendMessage(from, to, data) {
    const message = {
      id: this.mId++,
      from,
      to,
      data,
    };
    this.messages.push(message);
    return message.id;
  }

  updateMessage(user, mId, newdata) {
    const msg = this.messages.find((m) => m.id === mId);
    if (!msg) return "Message not found";
    if (msg.from !== user) return "Only the Sender can update the message";
    msg.data = newdata;
    return "Message updated";
  }

  deleteMessage(user, mId) {
    const index = this.messages.findIndex((m) => m.id === mId);
    if (index === -1) return "Message not found";
    if (this.messages[index].from !== user) return "Only Sender can delete";
    this.messages.splice(index, 1);
    return "Message deleted";
  }

  getMessagesForUser(user) {
    return this.messages.filter((msg) => msg.to === user || msg.from === user);
  }
}

const chat = new ChatApp();

const msg1 = chat.sendMessage("Ram", "Bala", "Hey!");
const msg2 = chat.sendMessage("Bala", "Ram", "Hi!");

console.log(chat.getMessagesForUser("Ram"));

console.log(chat.updateMessage("Bala", msg1, "Yo!"));
console.log(chat.updateMessage("Ram", msg1, "Hello"));

console.log(chat.deleteMessage("Bala", msg1));
console.log(chat.deleteMessage("Ram", msg1));

console.log(chat.getMessagesForUser("Ram"));
