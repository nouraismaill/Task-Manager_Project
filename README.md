# Task Management Web Application

This is a full-stack task management web application built using ExpressJS, MySQL, and ReactJS. The application allows users to manage tasks, share tasks with others, and track their status.

## Features

-User Authentication: Users can register and log in using JWT (JSON Web Tokens).

-Task Management: Users can create, edit, delete, and view their tasks.

-Task Sharing: Users can share their tasks with other registered users. Shared users can only view, not edit, shared tasks.

-Task Status Tracking: Tasks can have statuses like Open, In Progress, Paused, Cancelled, and Completed.


## Installation Instructions

Follow these instructions to run the project on your local machine.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** and **npm** installed.
- **MySQL** installed and running.
- Git for version control.
### Clone the repository
   ```bash
   git clone https://github.com/nouraismaill/Test
   cd Test
 ```
### Backend Setup (ExpressJS)

1. Navigate to the backend folder:
   ```bash
  
   cd Backend
2. Install backend dependencies:
   ```bash
   npm install
3. Start the backend server:
   ```bash
   npm run server

4. Open a web browser and visit http://localhost:3000 to access the application

### Frontend Setup (ReactJS)
1. Navigate to the frontend folder:
   ```bash
   cd Frontend
2. Install backend dependencies:
      ```bash
      npm install
3. Start the frontend server:
    ```bash
    npm run dev
    ```
4. Open a web browser and visit http://localhost:5173 to access the application
