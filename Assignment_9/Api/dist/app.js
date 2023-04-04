"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const PORT = 7000;
const FILE_PATH = './users.json';
app.get('/', (req, res) => {
    res.send('Welcome to my REST API!');
});
app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Other"] = "Other";
})(Gender || (Gender = {}));
// Middleware for parsing JSON in request body
app.use(express_1.default.json());
// GET - Get all users
app.get('/users', (req, res) => {
    fs_1.default.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading users file');
            return;
        }
        const users = JSON.parse(data);
        res.json(users);
    });
});
// GET - Get user by email
app.get('/users/:email', (req, res) => {
    const { email } = req.params;
    fs_1.default.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading users file');
            return;
        }
        const users = JSON.parse(data);
        const user = users.find((u) => u.email === email);
        if (!user) {
            res.status(404).send('User not found');
            return;
        }
        res.json(user);
    });
});
// POST - Create user
app.post('/users', (req, res) => {
    const { name, age, email, gender } = req.body;
    // Check if email already exists
    fs_1.default.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading users file');
            return;
        }
        const users = JSON.parse(data);
        const existingUser = users.find((u) => u.email === email);
        if (existingUser) {
            res.status(409).send('User with this email already exists');
            return;
        }
        const newUser = { name, age, email, gender };
        users.push(newUser);
        fs_1.default.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error writing to users file');
                return;
            }
            res.json(newUser);
        });
    });
});
// PUT - Update user by email
app.put('/users/:email', (req, res) => {
    const { email } = req.params;
    const { name, age, gender } = req.body;
    fs_1.default.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading users file');
            return;
        }
        const users = JSON.parse(data);
        const userIndex = users.findIndex((u) => u.email === email);
        if (userIndex === -1) {
            res.status(404).send('User not found');
            return;
        }
        users[userIndex].name = name;
        users[userIndex].age = age;
        users[userIndex].gender = gender;
        fs_1.default.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error writing users file');
                return;
            }
            res.status(200).send('User updated successfully');
        });
    });
});
// DELETE - Update user by email
app.delete('/users/:email', (req, res) => {
    const { email } = req.params;
    fs_1.default.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error reading users file');
            return;
        }
        const users = JSON.parse(data);
        const filteredUsers = users.filter((u) => u.email !== email);
        if (filteredUsers.length === users.length) {
            res.status(404).send('User not found');
            return;
        }
        fs_1.default.writeFile(FILE_PATH, JSON.stringify(filteredUsers), (err) => {
            if (err) {
                console.error(err);
                res.status(500).send('Error writing users file');
                return;
            }
            res.status(200).send('User deleted successfully');
        });
    });
});
