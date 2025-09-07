# 🌟 Simple REST API with Express.js

This is a **simple REST API** built using **Node.js** and **Express.js**, with basic CRUD functionality for managing users.  
It reads and writes data from a local `MOCK_DATA.json` file and demonstrates core REST concepts.

---

## 🚀 Features

- ✅ Get all users  
- ✅ Get user by ID  
- ✅ Create a new user (stored in JSON file)  
- ✅ Placeholder for Edit (PATCH) and Delete user  
- ✅ Body parsing with `express.json()` and `express.urlencoded()`  
- ✅ Data persistence using `fs.writeFile`

---

## 📚 Endpoints

| Method | Endpoint              | Description                               |
|--------|-----------------------|-------------------------------------------|
| GET    | `/users`              | Retrieve all users                       |
| GET    | `/api/users`          | Retrieve all users (alternative route)  |
| GET    | `/api/users/:id`      | Retrieve a single user by ID            |
| POST   | `/api/users`          | Create a new user and save to JSON file |
| PATCH  | `/api/users/:id`      | Edit user with given ID (placeholder)   |
| DELETE | `/api/users/:id`      | Delete user with given ID (placeholder) |

---

## ⚡ Example: Create a new user (POST)

**Request URL:**  
POST http://localhost:8000/api/users

**Body (JSON):**
```json
{
    "first_name": "Sejal",
    "last_name": "Kumar",
    "email": "sejal@example.com"
}
```
Response:
```
{
    "status": "success",
    "id": 101
}
```

## ✅ How to Run Locally

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-username/my-rest-api.git
   ```
2. Install dependencies
```bash
 npm install
```

3. Start the server
```bash
npm start
```

4. Test the API
Open Postman or your browser and visit:
```bash
http://localhost:8000/users
```

## 🛠️Tech Stack
- Node.js
- Express.js
- File system (fs) for JSON file handling

## 📄 License
MIT License – Feel free to use and modify 🚀
