// ?? The biggest point of using the command pattern is to split the code
// ?? that wants to do something from the code that is responsible for handling it.

// Some example situations in which you can make great use of the command pattern are:

// Undo / Reset
// Since all processing of each action/operations are centralized by commands, they are often fit for implementing undo/reset for applications.
// You need a command to have a life span independent of the original request.
// Furthermore, if you want to queue, specify and execute requests at different times.
// You need undo/redo operations. The command's execution can be stored for reversing its effects. It is important that the Command class implements the methods undo and redo.
// You need to structure a system around high-level operations built on primitive operations.

// ?? invoker section (also called manager)
function createRequestManager() {
  const requests = [];

  return {
    execute(command, ...args) {
      return command.execute(requests, ...args);
    },
  };
}

// ** command section
function Command(execute) {
  this.execute = execute;
}

function AddRequestCommand(request) {
  // ** this arrow function by convention called invoker
  // (requests) => {
  //     requests.push(request);
  // }
  return new Command((requests) => {
    requests.push(request);
  });
}

function GetRequestsCommand() {
  return new Command((requests) => requests);
}

// ** end command section
function Request(url, type, body = {}) {
  this.url = url;
  this.type = type;
  this.body = body;
}

// *** client section
const request1 = new Request("http://demo.com/p1", "POST", { name: "request" });
const request2 = new Request("http://demo.com/p2", "GET");
const request3 = new Request("http://demo.com/p3", "DELETE");

const requestManager = createRequestManager();
requestManager.execute(new AddRequestCommand(request1));
requestManager.execute(new AddRequestCommand(request2));
requestManager.execute(new AddRequestCommand(request3));
requestManager.execute(new GetRequestsCommand());

// ** receiver section
