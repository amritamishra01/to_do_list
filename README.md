✅ TaskApp – MERN Stack To-Do List Application

A full-stack Task Management Application built using MongoDB, Express.js, React.js, and Node.js.
It allows users to register, login, add tasks, mark tasks as done, and delete tasks — with a clean modern UI styled using TailwindCSS.

This project demonstrates authentication, protected routes, REST API integration, and state management using React Context.

🚀 Features
🔐 Authentication

User Registration

User Login

JSON Web Token (JWT) based authentication

Protected Dashboard Route

📝 Task Features

Add new tasks

Mark tasks as done

Delete tasks

Real-time UI updates

🎨 Frontend Features

Modern UI using TailwindCSS

Responsive layout

Clean and minimal user experience

🗄️ Backend Features

REST API built with Express.js

MongoDB Database for users & tasks

Middleware for authentication

Secure password hashing using bcrypt

📸 Screenshots

## Login Page
![Login](https://raw.githubusercontent.com/amritamishra01/to_do_list/main/login.png)

## Register Page
![Register](https://raw.githubusercontent.com/amritamishra01/to_do_list/main/register.png)

## Dashboard – View 1
![Dashboard 1](https://raw.githubusercontent.com/amritamishra01/to_do_list/main/d1.png)

## Dashboard – View 2
![Dashboard 2](https://raw.githubusercontent.com/amritamishra01/to_do_list/main/d2.png)

## Dashboard – View 3
![Dashboard 3](https://raw.githubusercontent.com/amritamishra01/to_do_list/main/d3.png)

🛠️ Tech Stack
Frontend

React.js

React Router

Context API

Axios

Tailwind CSS

Backend

Node.js

Express.js

MongoDB (Mongoose)

JWT Authentication

Bcrypt Password Hashing

📁 Folder Structure
project2/
│── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Task.js
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── tasks.js
│   │   ├── middleware/auth.js
│   │   ├── server.js
│   ├── package.json
│
│── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   ├── api/
│   │   ├── App.js
│   ├── public/
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│
└── README.md

⚙️ How to Run the Project Locally
1️⃣ Clone the Repository
git clone https://github.com/amritamishra01/to_do_list.git
cd to_do_list

2️⃣ Setup Backend
cd backend
npm install

Create a .env file
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key
PORT=5000


Run Backend:

npm run dev

3️⃣ Setup Frontend
cd ../frontend
npm install
npm start


Frontend starts at:

http://localhost:3000


Backend starts at:

http://localhost:5000

🔒 Default Admin User

Insert this user manually into MongoDB if needed:

{
  "name": "Admin",
  "email": "admin@acme.test",
  "password": "$2b$10$N9qo8uLOickgx2ZMRZo5e.PG9uu5o1M90oCbGyF/F7kh/6h3eW8Ey"
}


Password → password

🧪 API Endpoints
Auth Routes
Method	Route	Description
POST	/auth/register	Register new user
POST	/auth/login	Login user
GET	/auth/me	Get logged-in user
Task Routes
Method	Route	Description
GET	/tasks	Get all tasks
POST	/tasks	Add new task
PUT	/tasks/:id	Mark task as done
DELETE	/tasks/:id	Delete task
🧾 Assignment Notes

This project demonstrates:

✔ MERN full-stack development
✔ Authentication system
✔ Protected routes in React
✔ REST API + Axios
✔ MongoDB CRUD operations
✔ Tailwind styling + custom UI
✔ Git & GitHub workflow

🙌 Author

Amrita Mishra
4th Term Engineering Student, ECE
GitHub: https://github.com/amritamishra01
