## What files can you edit?

Here is a description of the functionality of the most important folders and files in your project, and how you can edit them to customize your application. “name/” indicates a folder, “name.xx” indicates a file.

| **File/Directory**         | **Description**                                                                 | **Should You Edit?**                     |
|-----------------------------|---------------------------------------------------------------------------------|------------------------------------------|
| **backend/**               | Contains the backend code for your application (e.g., server logic, API).       | Yes, if you need to change server-side logic. |
| **env/**                   | Environment files or virtual environment directory. Usually auto-generated.     | No, unless you are adding environment-specific configurations. |
| **app.py**                 | Main Python file for your backend server or application logic.                  | Yes, for backend development.            |
| **requirements.txt**       | Lists Python dependencies required for the backend.                             | Yes, when adding/removing Python libraries. |
| **frontend/**              | Contains the frontend code for your application.                                | Yes, for editing the user interface or functionality. |
| **node_modules/**          | Auto-generated directory with installed dependencies for the frontend.          | No, this is managed by `npm` or `yarn`.  |
| **src/**                   | Contains the source code for the React frontend application.                    | Yes, for editing the components and styling. |
| **App.css**                | Styling for the `App.jsx` component.                                            | Yes, to adjust the styling for `App.jsx`. |
| **App.jsx**                | Root React component of the application.                                        | Yes, for core frontend functionality.    |
| **Components.css**         | Styling for the `Components.jsx` file.                                          | Yes, for UI styling changes.             |
| **Components.jsx**         | React components shared across the app.                                         | Yes, to edit shared functionality or add new components. |
| **HomePage.css**           | Styling for the homepage UI.                                                    | Yes, to adjust the homepage appearance.  |
| **HomePage.jsx**           | React component for the homepage.                                               | Yes, to modify homepage content or logic. |
| **index.css**              | Global CSS styles for the application.                                          | Yes, for app-wide styling.               |
| **main.jsx**               | Entry point for rendering the React app.                                        | Rarely, only if you need to adjust how React initializes. |
| **Widgets.css**            | Styling for `Widgets.jsx`.                                                      | Yes, for UI styling.                     |
| **Widgets.jsx**            | React components for widgets used in the app.                                   | Yes, for widget-specific functionality.  |
| **eslint.config.js**       | Configuration file for linting JavaScript/React code.                           | Rarely, only if you need to change linting rules. |
| **index.html**             | Main HTML template for the React app.                                           | Rarely, only for structural changes to the base HTML. |
| **package-lock.json**      | Auto-generated file for locking dependency versions in the frontend.            | No, this is managed by `npm`.            |
| **package.json**           | Lists the frontend dependencies and scripts.                                    | Yes, when adding/removing frontend libraries or changing scripts. |
| **vite.config.js**         | Configuration file for Vite (development server/build tool).                    | Rarely, unless you need to adjust build settings. |
| **README.md**              | Documentation for the project.                                                  | Yes, to update project documentation.    |
| **.gitignore**             | Specifies files/directories to ignore in version control.                       | Probably not, unless you need to exclude new files or directories. |
