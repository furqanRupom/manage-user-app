# User Management App

## Description
Welcome to our User Management App! This application is built using Express, TypeScript, and Mongoose. It provides a set of API routes for managing users and their orders, utilizing Zod for validation. Whether you're a developer looking to contribute or a user interested in setting up the project locally, we've got you covered!

## Contributing
We value your contributions! Here's how you can get involved:

- **Report Issues:** Encountered a bug or have a suggestion? Open an issue and let us know the details.
- **Contribute Code:** Developers, you can contribute by following the steps below:
    1. Fork this repository
    2. Clone the forked repository
    3. Add your contributions (code or documentation)
    4. Commit and push
    5. Submit a pull request

- **Suggestions:** If you have non-code related ideas, open an issue to discuss updates or improvements.

- **Documentation:** Feel free to enhance the documentation if you identify areas that need improvement.

## Installation

### Prerequisites
Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Steps

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/your-username/user-management-app.git
    cd user-management-app
    ```
    This command clones the project repository to your local machine and navigates into the project directory.

2. **Install Dependencies:**
    ```bash
    npm install
    ```
    This command installs the necessary Node.js packages and dependencies required for the application to run.

3. **Configure Environment Variables:**
    Create a `.env` file in the root directory and add the necessary environment variables. You can use the provided `.env.example` as a template.

4. **Start the Application:**
    ```bash
    npm start
    ```
    This command starts the application. After this step, you can access the app locally at [http://localhost:3000](http://localhost:3000).

5. **Access the App:**
    The app is now running at [http://localhost:3000](http://localhost:3000). You can explore the API routes and interact with the application.

## API Routes

- **Create User:**
    ```http
    POST /api/users
    ```

- **Retrieve All Users:**
    ```http
    GET /api/users
    ```

- **Retrieve Specific User:**
    ```http
    GET /api/users/:userId
    ```

- **Update Specific User:**
    ```http
    PUT /api/users/:userId
    ```

- **Delete Specific User:**
    ```http
    DELETE /api/users/:userId
    ```

- **Create Specific User Orders:**
    ```http
    PUT /api/users/:userId/orders
    ```

- **Retrieve Specific User Orders:**
    ```http
    GET /api/users/:userId/orders
    ```

- **Retrieve Specific User Orders Total Price:**
    ```http
    GET /api/users/:userId/orders/total-price
    ```

Feel free to explore and use these routes as needed. If you have any questions or run into issues, don't hesitate to reach out!
