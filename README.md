Book Search App

This is a simple React application that allows users to search and view a catalog of books. The application uses a backend server built with Express to provide a list of books.
Getting Started

    Clone the repository:

    bash

git clone <repository-url>

Navigate to the project directory:

bash

cd book-search-app

Install dependencies:

bash

npm install

Start the React app:

bash

npm start

Start the Express server (in a separate terminal):

bash

    npm run server

    Open your browser and go to http://localhost:3000 to view the app.

Features

    Search: Use the input fields to search for books based on author, title, year, pages, or any combination of these attributes.

    Filtering: The search results update dynamically as you type, providing instant feedback based on your input.

Components
App

The main component (App.js) fetches a list of books from the Express server and renders the search input fields, a button to clear the search, and a table displaying the filtered books.
InputSearch

The InputSearch component (InputSearch.js) is a reusable input field for searching. It receives a name prop specifying the attribute to search and an onChange prop for handling input changes.
ButtonSearch

The ButtonSearch component (ButtonSearch.js) is a reusable button for triggering the search. It receives a name prop for button label and a variant prop for styling.
TableComponent

The TableComponent (TableComponent.js) renders a table displaying the list of books based on the search criteria.
Backend Server

The backend server (server.js) is built with Express and provides a simple API endpoint (/) that returns a list of books in JSON format.
Technologies Used

    React
    Express
    Bootstrap

License

This project is licensed under the MIT License - see the LICENSE.md file for details.