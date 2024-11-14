import Database from "better-sqlite3";
const db = new Database('app.db');

// create table
// const query = `
//     CREATE TABLE users(
//         id INTEGER PRIMARY KEY,
//         name STRING NOT NULL,
//         username STRING NOT NULL UNIQUE
//     )
// `;

// db.exec(query);

// insert into table
// const data = [
//     { name: "Caleb", username: "Calcur"},
//     { name: "Brandy", username: "brand"},
//     { name: "Eli", username: "eli123"}
// ];

// const insertData = db.prepare("INSERT INTO users (name, username) VALUES (?, ?)");

// data.forEach((user) => {
//     insertData.run(user.name, user.username);
// });



// const query = 'SELECT * FROM users';
// const users = db.prepare(query).all();

// console.log(users);

// const user = db.prepare('SELECT * FROM users WHERE id = ?').get(1);
// console.log(user);

// db.close();

import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    const users = db.prepare(query).all();
    res.json({ users: users });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});