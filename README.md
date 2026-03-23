# 💻 Online Code Compiler

A full-stack Online Code Compiler built using **React.js, Node.js, Express.js, and MongoDB**.  
This application allows users to write, run, and save code in multiple programming languages with input/output support.

---

## 🚀 Features

- Multi-language support (JavaScript, Python, C++, Java)
- Input and Output console
- Run code using Judge0 API
- Save programs to MongoDB
- View program history
- Delete saved programs
- User Authentication (Signup/Login)
- Clean and responsive UI

---

## 🛣️ Sample Routes

### 🔹 Authentication Routes

- **POST `/api/auth/signup`**  
  → Register a new user  

- **POST `/api/auth/login`**  
  → Login user and receive authentication token  

---

### 🔹 Code Execution Route

- **POST `/api/run`**  
  → Executes code using Judge0 API  

---

### 🔹 Program Management Routes

- **POST `/api/saveProgram`**  
  → Save a program to MongoDB  

- **GET `/api/programs`**  
  → Fetch all saved programs  

- **DELETE `/api/programs/:id`**  
  → Delete a saved program  

---

## ▶️ Starting & Ending Point

### Starting Point:

http://localhost:3000/

(Signup Page)

### Login Page:

http://localhost:3000/login


### Ending Point:

http://localhost:3000/compiler

(Main Compiler Interface)

---

## 🔄 Input / Output

### Example Input:

5
10


### Example Code (Python):
```python
a = int(input())
b = int(input())
print(a + b)
Output:
15
⚙️ Entry Point & Commands

###Backend Setup

cd backend
npm install
node server.js
Frontend Setup
cd frontend
npm install
npm start


###📦 Libraries Used

Frontend:
React.js
Axios
React Router DOM
Tailwind CSS (for UI)
Backend:
Node.js
Express.js
Mongoose
bcryptjs
jsonwebtoken
cors


###🌐 External API Used
Judge0 API

Judge0 API is used to execute user code.

Accepts code and language
Executes it on server
Returns output, errors, or results


###🗄️ Database
MongoDB (Local Database)

Stores:

User details (name, email, password)
Saved programs (code, language, input, output)

###🔐 Authentication
Signup and Login functionality
Passwords are encrypted using bcrypt
JWT (JSON Web Token) used for authentication


###📁 Project Structure
online-code-compiler
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   └── App.js
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   └── server.js
│
└── README.md


###🎯 Future Improvements
Deploy project online (Vercel + Render)
Add Monaco Editor (VS Code-like editor)
Add user-specific program history
Improve UI/UX design
Add code sharing feature
