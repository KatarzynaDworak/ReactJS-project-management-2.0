# Thanks for viewing my Project ✨


Uploading Nagranie z ekranu 2024-10-13 o 14.37.35.mov…


<br />

## :star: **Implementation:**
The project uses [Vite](https://vite.dev/), [npm](https://www.npmjs.com/). To run the app on your machine you should install all dependencies. Then create a localhost port and run your web explorer.

Let's move to the Kanban folder:

            cd Kanban

Let's start with installing all dependencies. Move to the app main workspace and run:

            npm i

To create a localhost port you should type:

            npm run dev

<br />
<br />

## Summary
This Kanban board application provides a robust structure for managing tasks with user authentication. It leverages modern tools like React, Firebase, and Zustand, demonstrating a solid understanding of both frontend and backend development.

For further details or implementation specifics, you might want to check additional resources on the technologies used, such as the React documentation or the Firebase documentation.
## Overview of the Application Structure
**1. Entry Point (main.jsx):**

Sets up the React application, rendering the main App component.
Applies global styles from index.css using Tailwind CSS.

**2. Styling (index.css):**

Imports Tailwind CSS styles to use utility-first CSS for styling the application.

**3. Main Application (App.jsx):**

Utilizes React Router for navigation between different routes (e.g., Login, Register, Dashboard).
Contains a navigation bar with links for the main sections of the app.
Uses a ProtectedRoutes component to guard access to the Dashboard.

**4. Protected Routes (ProtectedRoutes.jsx):**

Ensures only authenticated users can access certain routes, redirecting unauthenticated users to the login page.

**5. Authentication Store (auth.js):**

Manages user authentication using Zustand for state management.
Defines actions for logging in, logging out, and initializing the user session via Firebase's authentication services.
Handles local storage for Kanban board data.

**6. Firebase Configuration (firebase.js):**

Initializes Firebase app and exports the authentication instance for use in the application.

**7. User Registration and Login Forms (RegisterForm.jsx and LoginForm.jsx):**

Components for user input, handling form submission and authentication through Firebase.
Displays success and error messages based on user actions.

**8. Dashboard and Kanban Board (Dashboard.jsx and Board.jsx):**

Displays the Kanban board with columns and tasks.
Uses drag-and-drop functionality for task management with react-beautiful-dnd.

**9. Column and Task Management (Column.jsx):**

Renders individual columns and their tasks, allowing users to add and delete tasks.
Validates task limits per column.

## Key Features

**1. Authentication:** The application uses Firebase for managing user authentication, allowing users to register and log in. It tracks the user's state and provides protection for sensitive routes.

**2. Kanban Board:** The Kanban board is implemented with draggable columns and tasks, which enhances user interaction and usability.

**3. State Management:** Zustand is employed for managing the application's state related to authentication and Kanban board data, making it easy to share state across components.

**4. Responsive Design:** With Tailwind CSS, the application has a modern, responsive design that looks good on various devices.


