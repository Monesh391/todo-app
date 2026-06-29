const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Todo API is Running...");
});

app.get("/todos", (req, res) => {
    fs.readFile("./data/todos.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading file" });
        }

        const todos = JSON.parse(data);
        res.json(todos);
    });
});

app.get("/todos/:id", (req, res) => {
    fs.readFile("./data/todos.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading file" });
        }

        const todos = JSON.parse(data);
        const todo = todos.find(t => t.id == req.params.id);

        if (!todo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.json(todo);
    });
});

app.post("/todos", (req, res) => {
    fs.readFile("./data/todos.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading file" });
        }

        const todos = JSON.parse(data);

        const newTodo = {
            id: todos.length + 1,
            title: req.body.title,
            description: req.body.description,
            completed: false
        };

        todos.push(newTodo);

        fs.writeFile("./data/todos.json", JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Error writing file" });
            }

            res.status(201).json(newTodo);
        });
    });
});

app.put("/todos/:id", (req, res) => {
    fs.readFile("./data/todos.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading file" });
        }

        let todos = JSON.parse(data);

        const index = todos.findIndex(todo => todo.id == req.params.id);

        if (index === -1) {
            return res.status(404).json({ message: "Todo not found" });
        }

        todos[index] = {
            ...todos[index],
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        };

        fs.writeFile("./data/todos.json", JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Error writing file" });
            }

            res.json(todos[index]);
        });
    });
});

app.delete("/todos/:id", (req, res) => {
    fs.readFile("./data/todos.json", "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading file" });
        }

        let todos = JSON.parse(data);

        const index = todos.findIndex(todo => todo.id == req.params.id);

        if (index === -1) {
            return res.status(404).json({ message: "Todo not found" });
        }

        todos.splice(index, 1);

        fs.writeFile("./data/todos.json", JSON.stringify(todos, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Error writing file" });
            }

            res.json({ message: "Todo deleted successfully" });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});