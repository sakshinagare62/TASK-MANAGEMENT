# Task Management System
A full-stack Task Management System built using React, Node.js, Express, and MongoDB.  
The application allows users to create, view, update, delete, search, filter, and sort tasks efficiently.
---
## Features
-  Create new tasks
-  View all tasks
-  Update task details
-  Delete tasks
-  Separate tasks by category (Personal, Work, Study)
-  Search tasks by title
-  Filter tasks by category, status, and priority
-  Sort tasks by priority and due date
-  Show task status with dynamic color indicators (Pending, In-Progress, Completed)

---
##  Tech Stack
### Frontend
- React.js
- Tailwind CSS
- DaisyUI
- React Router
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

---
## Project Structure
### Frontend
- `HomePage.jsx` → Displays all tasks with search, filter, and sort features
- `CreatePage.jsx` → Form to create new tasks
- `TaskDetailPage.jsx` → View, update, and delete a specific task
- `TaskCard.jsx` → Displays individual task information
- `Navbar.jsx` → Navigation bar
- `TaskNotFound.jsx` → Shown when no tasks exist
### Backend
- Models → Task Schema
- Controllers → CRUD operations
- Routes → API endpoints
---
##  Task Schema
Each task contains the following fields:

- `title` (String)
- `description` (String)
- `dueDate` (Date)
- `category` (personal | work | study)
- `status` (pending | in-progress | completed)
- `priority` (high | medium | low)
- `createdAt` (Date)

--
---
##  Task Schema

Each task contains:

- title (String)
- description (String)
- dueDate (Date)
- category (personal | work | study)
- status (pending | in-progress | completed)
- priority (high | medium | low)
- createdAt (Date - auto generated)
---

## 🔄 API Endpoints

| Method | Endpoint        | Description           |
|--------|-----------------|-----------------------|
| GET    | /task           | Get all tasks         |
| GET    | /task/:id       | Get single task       |
| POST   | /task           | Create new task       |
| PUT    | /task/:id       | Update task           |
| DELETE | /task/:id       | Delete task           |
---
---

## Task Schema

Each task contains:
- title (String)
- description (String)
- dueDate (Date)
- category (personal | work | study)
- status (pending | in-progress | completed)
- priority (high | medium | low)
- createdAt (Date - auto generated)
---
## 🔄 API Endpoints

| Method | Endpoint        | Description           |
|--------|-----------------|-----------------------|
| GET    | /task           | Get all tasks         |
| GET    | /task/:id       | Get single task       |
| POST   | /task           | Create new task       |
| PUT    | /task/:id       | Update task           |
| DELETE | /task/:id       | Delete task           |

---
### 2️⃣ Backend Setup

cd backend
npm install
npm run dev

### 3️⃣ Frontend Setup

cd frontend
npm install
npm run dev

---
##  How Main Features Work

### 🔹 Separating by Category
Tasks are filtered dynamically on the frontend using React state and the `filter()` method.

### 🔹 Showing Status
Each task displays its status (Pending, In-Progress, Completed) with color-coded badges using conditional styling.

### 🔹 Search
Tasks are searched by title using case-insensitive matching.

### 🔹 Sorting
Tasks are sorted by priority or due date using JavaScript `sort()` 

##  Conclusion

This project demonstrates full-stack CRUD functionality with modern UI design, dynamic filtering, sorting, and efficient task management using the MERN stack.