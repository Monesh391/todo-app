# Todo Application

## Project Description
This is a full-stack Todo Application developed using React.js, Node.js, and Express.js. It allows users to create, view, update, and delete todos. The application consists of a React frontend and an Express backend that provides RESTful CRUD APIs.

## Features
- View all todos
- View a single todo
- Create a new todo
- Edit an existing todo
- Delete a todo
- Multi-page application using React Router
- Backend REST APIs using Express.js
- Data stored in a JSON file

## Technologies Used

### Frontend
- React.js
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /todos | Get all todos |
| GET | /todos/:id | Get a todo by ID |
| POST | /todos | Create a new todo |
| PUT | /todos/:id | Update a todo |
| DELETE | /todos/:id | Delete a todo |

## Project Structure

```
todo-app
├── frontend
├── backend
├── README.md
```

## How to Run

### Backend
```bash
cd backend
npm install
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Open:

```
http://localhost:5173
```

## Functionality

- Users can create new todos.
- Users can view all todos.
- Users can open a todo details page.
- Users can edit existing todos.
- Users can delete todos.
- Changes are reflected immediately in the application.

## Author

Name: YOUR NAME