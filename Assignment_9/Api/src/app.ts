import express, { Request, Response } from 'express';
import fs from 'fs';

const app = express();
const PORT = 7000;
const FILE_PATH = './users.json';


app.get('/', (req, res) => {
  res.send('Welcome to my REST API!');
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});

enum Gender {
  Male = 'Male',
  Female = 'Female',
  Other = 'Other',
}

interface User {
  name: string;
  age: number;
  email: string;
  gender: Gender;
}

// Middleware for parsing JSON in request body
app.use(express.json());

// GET - Get all users
app.get('/users', (req: Request, res: Response) => {
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading users file');
      return;
    }

    const users: User[] = JSON.parse(data);
    res.json(users);
  });
});

// GET - Get user by email
app.get('/users/:email', (req: Request, res: Response) => {
  const { email } = req.params;

  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading users file');
      return;
    }

    const users: User[] = JSON.parse(data);
    const user = users.find((u) => u.email === email);

    if (!user) {
      res.status(404).send('User not found');
      return;
    }

    res.json(user);
  });
});

// POST - Create user
app.post('/users', (req: Request, res: Response) => {
  const { name, age, email, gender } = req.body;

  // Check if email already exists
  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading users file');
      return;
    }

    const users: User[] = JSON.parse(data);
    const existingUser = users.find((u) => u.email === email);

    if (existingUser) {
      res.status(409).send('User with this email already exists');
      return;
    }

    const newUser: User = { name, age, email, gender };
    users.push(newUser);

    fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
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
app.put('/users/:email', (req: Request, res: Response) => {
  const { email } = req.params;
  const { name, age, gender } = req.body;

  fs.readFile(FILE_PATH, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading users file');
      return;
    }

    const users: User[] = JSON.parse(data);
    const userIndex = users.findIndex((u) => u.email === email);

    if (userIndex === -1) {
      res.status(404).send('User not found');
      return;
    }

    users[userIndex].name = name;
    users[userIndex].age = age;
    users[userIndex].gender = gender;

    fs.writeFile(FILE_PATH, JSON.stringify(users), (err) => {
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
app.delete('/users/:email', (req: Request, res: Response) => {
    const { email } = req.params;
  
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error reading users file');
        return;
      }
  
      const users: User[] = JSON.parse(data);
      const filteredUsers = users.filter((u) => u.email !== email);
  
      if (filteredUsers.length === users.length) {
        res.status(404).send('User not found');
        return;
      }
  
      fs.writeFile(FILE_PATH, JSON.stringify(filteredUsers), (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error writing users file');
          return;
        }
  
        res.status(200).send('User deleted successfully');
      });
    });
  });
  