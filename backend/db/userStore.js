import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = path.join(__dirname, "users.json");

function readDB() {
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify({ users: [], nextId: 1 }, null, 2));
  }
  return JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
}

function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

export function findUserByEmail(email) {
  const { users } = readDB();
  return users.find((u) => u.email.toLowerCase() === email.toLowerCase()) || null;
}

export function findUserById(id) {
  const { users } = readDB();
  return users.find((u) => u.id === id) || null;
}

export function createUser({ name, email, password, role = "student", department = null }) {
  const db = readDB();
  const user = {
    id: db.nextId++,
    name,
    email: email.toLowerCase(),
    password, // already hashed before calling this
    role,
    department,
    createdAt: new Date().toISOString(),
  };
  db.users.push(user);
  writeDB(db);
  return user;
}

export function safeUser(user) {
  const { password, ...rest } = user;
  return rest;
}
