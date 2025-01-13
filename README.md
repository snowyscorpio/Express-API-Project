# Express API Project

This repository contains a solution to an API and server-side rendering exercise using Node.js and Express.

## Exercise: Create an Express Server with API and HTML Rendering

### Requirements:
1. Create a project folder for the application.
2. Inside the folder:
   - Create an `app.js` file to implement the server.
   - Create a `users.json` file containing user data.
   - Include a `package.json` file to manage dependencies.
3. Implement the following API routes:
   - `GET /api/users`: Returns all users in JSON format.
   - `GET /api/users/:id`: Returns a specific user by ID. Returns a 404 error if the user is not found.
   - `GET /api/users/filter?minAge=NUMBER&maxAge=NUMBER`: Filters users within a specific age range.
   - `GET /user/:id`: Renders an HTML page displaying user details. Returns a 404 error if the user is not found.

### Project Structure:
```plaintext
Express_Task_7/
├── app.js
├── package.json
├── users.json
```
- **API logic**: Implemented in `app.js` to handle requests and responses.
- **Data storage**: Stored in `users.json`.

### Solution Overview:

1. **API Implementation**:
   - `GET /api/users`: Fetch all users from `users.json` and return as JSON.
   - `GET /api/users/:id`: Search for a user by ID and return the result as JSON or a 404 error.
   - `GET /api/users/filter`: Filter users by age range using `minAge` and `maxAge` query parameters.
   - `GET /user/:id`: Render a user details page in HTML format.

2. **Data Storage**:
   - User data is stored in `users.json`:
     ```json
     [
       {
         "id": 1,
         "name": "Alice",
         "email": "alice@example.com",
         "age": 25
       },
       {
         "id": 2,
         "name": "Bob",
         "email": "bob@example.com",
         "age": 30
       },
       {
         "id": 3,
         "name": "Charlie",
         "email": "charlie@example.com",
         "age": 28
       },
       {
         "id": 4,
         "name": "Diana",
         "email": "diana@example.com",
         "age": 22
       }
     ]
     ```

3. **Server-Side Rendering**:
   - Serve user details as an HTML page for the `/user/:id` route.

### Example Routes:
- `/api/users`: Returns all users in JSON.
- `/api/users/1`: Returns the user with ID 1 in JSON.
- `/api/users/filter?minAge=25&maxAge=30`: Filters users between the ages of 25 and 30.
- `/user/1`: Renders an HTML page displaying the details of the user with ID 1.

### How to Run:
1. Clone the repository.
2. Navigate to the project directory.
3. Install Node.js and the necessary dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Access the server at `http://localhost:3000`.

### Dependencies:
- **Express.js**: For routing and server creation.

### Notes:
- The server runs on port 3000 by default. You can change the port by setting the `PORT` environment variable.
- Ensure the `users.json` file is in the root directory for the app to function correctly.



Have a great day ♡


![CuteCat](https://github.com/user-attachments/assets/191e0612-1861-4915-8007-fcc20784854a)

