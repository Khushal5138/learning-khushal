let express = require("express");
const path = require("path");
const socketIo = require("socket.io");
const http = require("http");
const cors = require('cors');

let app = express();
//this line allows us to use body parsing meaning that we can now read the data in body.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = http.createServer(app);
//the socket server is created .

app.use(cors());

app.use(express.json());

const io = socketIo(server, { cors: { origin: "*" } });
let interval;
io.on("connection", (socket) => {
	console.log("new socket connection");
	if (interval) {
		clearInterval();
	}
	interval = setInterval(() => {
		const response = new Date();
		socket.emit("GetTime", response);
	}, 1500);
	socket.on("disconnect", () => {
		console.log("client disconnected");
		clearInterval(interval);
	});
});

let todos = [
	{ name: "read book", status: "complete" },
	{ name: "go to gym", status: "incomplete" },
];
app.get("/todos", function (request, response) {
	response.json(todos);
});
//:id means id can have any value. so it is variable.
app.get("/todos/:id", function (request, response) {
	let id = request.params.id;
	response.json(todos[id]);
});
app.post("/todos", function (request, response) {
	console.log(request.body);
	let { name, status } = request.body;
	let todosOb = { name: name, status: status };
	todos.push(todosOb);
	response.json({ status: 1, msg: "operation to add todo is complete" });
});

app.get("/todoform", function (request, response) {
	let completePath = path.join(__dirname + "/todoform.html");
	response.sendFile(completePath);
});
app.delete("/todos/:id", function (request, response) {
	console.log("came in delete function ");
	let newTodos = todos.filter((val, index) => {
		if (index == request.params.id) return false;
		return true;
	});
	todos = [...newTodos];
	response.json({
		status: 1,
		msg: "Todo item with id ${request.params.id} is deleted",
	});
});
server.listen(3001);
