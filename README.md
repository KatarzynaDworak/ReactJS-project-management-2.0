# Thanks for viewing my Project ✨


<br />

## :star: **Implementation:**
The project uses [Vite]([https://vite.dev/]), [npm](https://www.npmjs.com/) and [JSON Server](https://www.npmjs.com/package/json-server/v/0.17.4). To run the app on your machine you should install all dependencies. Then create a localhost port and run your web explorer.

Let's start with installing all dependencies. Move to the app main workspace and run:

            npm i

To create a localhost port you should type:

            npm run dev

<br />
<br />

## Main goal of my work was to:
**1. Admin Panel for Excursions**: create a user-friendly admin interface for managing excursion details, including adding, editing, and deleting excursions.

**2. Client-side Excursion Display**: implement a client-side interface for users to view available excursions, add them to their basket, and place orders.

**3. Order Management**: develop functionalities for users to submit their excursion orders and for admins to manage these orders efficiently.

**4. Data Validation and Error Handling**: ensure robust validation for both excursion management and order placement, with clear error messages to guide users.
<br />

## Solutions provided in the project
**1. Admin Interface for Excursions:**
The admin panel allows admins to manage excursions dynamically.

         async function builtExcursionsAdminUi() {
           document.querySelector(".excursions").innerHTML = "";
           const excursionsApi = new ExcursionsAPI();
           const excursions = await excursionsApi.getExcursions();
           excursions.forEach((excursion) => {
             const li = document.createElement("li");
             li.className = "excursions__item";
             const header = document.createElement("header");
             const title = document.createElement("h2");
             title.className = "excursions__title";
             title.textContent = excursion.Title;
             const description = document.createElement("p");
             description.className = "excursions__description";
             description.textContent = excursion.Description;
             header.appendChild(title);
             header.appendChild(description);
             li.appendChild(header);
             document.querySelector(".excursions").appendChild(li);
           });
         }
## Overview of the Application Structure
Entry Point (main.jsx):

Sets up the React application, rendering the main App component.
Applies global styles from index.css using Tailwind CSS.
Styling (index.css):

Imports Tailwind CSS styles to use utility-first CSS for styling the application.
Main Application (App.jsx):

Utilizes React Router for navigation between different routes (e.g., Login, Register, Dashboard).
Contains a navigation bar with links for the main sections of the app.
Uses a ProtectedRoutes component to guard access to the Dashboard.
Protected Routes (ProtectedRoutes.jsx):

Ensures only authenticated users can access certain routes, redirecting unauthenticated users to the login page.
Authentication Store (auth.js):

Manages user authentication using Zustand for state management.
Defines actions for logging in, logging out, and initializing the user session via Firebase's authentication services.
Handles local storage for Kanban board data.
Firebase Configuration (firebase.js):

Initializes Firebase app and exports the authentication instance for use in the application.
User Registration and Login Forms (RegisterForm.jsx and LoginForm.jsx):

Components for user input, handling form submission and authentication through Firebase.
Displays success and error messages based on user actions.
Dashboard and Kanban Board (Dashboard.jsx and Board.jsx):

Displays the Kanban board with columns and tasks.
Uses drag-and-drop functionality for task management with react-beautiful-dnd.
Column and Task Management (Column.jsx):

Renders individual columns and their tasks, allowing users to add and delete tasks.
Validates task limits per column.
Key Features
Authentication: The application uses Firebase for managing user authentication, allowing users to register and log in. It tracks the user's state and provides protection for sensitive routes.

Kanban Board: The Kanban board is implemented with draggable columns and tasks, which enhances user interaction and usability.

State Management: Zustand is employed for managing the application's state related to authentication and Kanban board data, making it easy to share state across components.

Responsive Design: With Tailwind CSS, the application has a modern, responsive design that looks good on various devices.

Summary
This Kanban board application provides a robust structure for managing tasks with user authentication. It leverages modern tools like React, Firebase, and Zustand, demonstrating a solid understanding of both frontend and backend development.

For further details or implementation specifics, you might want to check additional resources on the technologies used, such as the React documentation or the Firebase documentation.
> 
> 🎁 *Zacznij od razu. Skorzystaj z **[szablonu README i wskazówek](https://github.com/devmentor-pl/readme-template)**.* 
