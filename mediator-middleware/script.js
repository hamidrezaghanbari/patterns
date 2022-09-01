// ?? Mediator/Middleware Pattern
// ** Use a central mediator object to handle communication between components

// ?? description
// ** The mediator pattern makes it possible for components to interact with each other
// ** through a central point: the mediator. Instead of directly talking to each other,
// ** the mediator receives the requests, and sends them forward! In JavaScript,
// ** the mediator is often nothing more than an object literal or a function.

// ** good use case of mediator pattern is chatroom
class Chatroom {
  logMessage(user, message) {
    const userName = user.getName();
    console.log("message is " + message + "from " + userName);
  }
}

class User {
  constructor(name, chatroom) {
    this.name = name;
    this.chatroom = chatroom;
  }

  getName() {
    return this.name;
  }

  send(message) {
    this.chatroom.logMessage(this, message);
  }
}

const chatroom = new Chatroom();
const user1 = new User("mike", chatroom);
const user2 = new User("jack", chatroom);

user1.send("Hi everybody");
user2.send("hi mike how are you?");

// ** middleware is middle of relation of many to many (express js is example of use this)
// TODO for more work on this two design pattern

