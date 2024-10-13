# Thanks for viewing my Project ✨

https://github.com/user-attachments/assets/faf83ac1-8b53-403c-9476-1d48f7bd5953

<br />

## Task Management Board📝
This project is a Kanban Board application built using React, with Firebase for user authentication and Zustand for state management. The application allows users to organize tasks across draggable columns and manage their workflow efficiently.

## 📋 Overview of the Application Structure
* Authentication: Users can register, log in, and have access to a protected dashboard.
* Management Board: The main dashboard includes a fully functional Kanban board with draggable columns and tasks.
* State Management: Zustand is used to manage both authentication state and board data.
* Firebase: Used for handling user authentication and cloud-based data storage.
* Responsive Design: Tailwind CSS ensures the app is responsive and visually appealing on various devices.

## 💻 Key Features
* User Authentication: Secure user registration and login handled by Firebase.
* Protected Routes: Only authenticated users can access the Kanban dashboard.
* Draggable Kanban Board: Columns and tasks can be moved with drag-and-drop functionality.
* Task Management: Users can create, edit, and delete tasks across different columns.
* State Management: Zustand is employed to handle the application's global state, making it simple and scalable.
* Responsive UI: Tailwind CSS is used to provide a responsive and clean interface for both desktop and mobile users.

## 🛠️ Implementation
The application follows a modular and component-based architecture to maintain clarity and reusability. Below is an overview of key components:
* Entry Point (main.jsx): Initializes the React app and applies global styles with Tailwind CSS.
* App.jsx: Contains the main structure of the application, including routing between login, registration, and dashboard.
* Authentication (auth.js): Manages user authentication state using Zustand, with Firebase as the authentication provider.
* Management Board (Board.jsx): Implements the Kanban board with draggable columns and tasks, using react-beautiful-dnd.
* Protected Routes (ProtectedRoutes.jsx): Ensures that only authenticated users can access the Kanban dashboard.
* User Forms (LoginForm.jsx and RegisterForm.jsx): Handles form validation and submission for user login and registration.
* Firebase Configuration (firebase.js): Configures Firebase for authentication and database interactions.

## 🛠️ Languages and Tools Used
* React for building the user interface
* Firebase for authentication and backend services
* Zustand for lightweight state management
* Tailwind CSS for styling
* Vite for fast builds and development
* HTML & CSS for structure and styling

## Future Enhancements
* Integration with Firebase Firestore to store and sync Management board data in real-time
* Implement task deadlines and notifications
* Add user-specific settings and task history
* Allow multiple boards and collaboration features

## How to Run the Project Locally
1. Clone the repository:

            git clone https://github.com/yourusername/kanban-board.git

2. Navigate to the project directory:

            cd kanban-board

3. Install dependencies:

            npm install

4. Start the development server:

            npm run dev

**Author: Katarzyna Dworak**
Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/katarzynadworakk/).

This project is still in development. Contributions and feedback are welcome!


