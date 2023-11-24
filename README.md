# User Management App

## Description
Welcome to our User Management App! This application is built using Express, TypeScript, and Mongoose. It provides a set of API routes for managing users and their orders, utilizing Zod for validation. Whether you're a developer looking to contribute or a user interested in setting up the project locally, we've got you covered!

## Contributing
We value your contributions! Heres how can you get space to contriubtes :

- **Report Issues:** If you get any bugs don't hasited to or shy to report it.
- **Contribute Code:** Developers, you can contribute by following the steps below:
    1. Fork this repository
    2. Clone the forked repository
    3. Add your contributions (code or documentation)
    4. Commit and push
    5. Submit a pull request

- **Suggestions:** If you any suggesstions or code issues you can provide it

- **Documentation:** Feel free to suggest the documentation if you get or identify areas that need improvement.

## Installation

### Prerequisites
Make sure you have the following installed on your machine which can be mac/linux or windows:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Steps

1. **Clone the Repository:**
    ```bash
    git clone https://github.com/furqanRupom/manage-user-app.git
    ```
    This command clones the project repository to your local machine and navigates into the project directory.

2. **Install Dependencies:**
    ```bash
    yarn 
    ```
    This command installs the necessary Node.js packages and dependencies required for the application to run.

3. **Configure Environment Variables:**
    Create a `.env` file in the root directory and add the necessary environment variables. You can use the provided `.env.local` as a template.

4. **Start the Application:**
    ```bash
    yarn start
    ```
    This command starts the application. After this step, you can access the app locally at [http://localhost:5000](http://localhost:5000).
   NOTE: you have to set the port number to 5000.

6. **Access the App:**
    The app is now running at [http://localhost:5000](http://localhost:5000). You can explore the API routes and interact with the application.


##Features

### API Routes

- **Create User:**
    ```http
    POST /api/users
    ```
    * You can create a user with this following routes with the provided data.
      

- **Retrieve All Users:**
    ```http
    GET /api/users
    ```
    * You can retrieve the all the users with this following routes.

- **Retrieve Specific User:**
    ```http
    GET /api/users/:userId
    ```
    * you can get specific user by sending response with this following routes

- **Update Specific User:**
    ```http
    PUT /api/users/:userId
    ```

    * you can update the specific user with this routes


- **Delete Specific User:**
    ```http
    DELETE /api/users/:userId
    ```
    * you can delete the specific user with this routes

- **Create Specific User Orders:**
    ```http
    PUT /api/users/:userId/orders
    ```

    * you can create a product orders list by using this routes

- **Retrieve Specific User Orders:**
    ```http
    GET /api/users/:userId/orders
    ```
 * you can retrieve all the products orders list by using routes
 * 
- **Retrieve Specific User Orders Total Price:**
    ```http
    GET /api/users/:userId/orders/total-price
    ```
    * you can   calculate the total cost of products for specific users wit this routes.

Explore freely this app and use all routes as need it . And if you get any bugs or problem don't hesitate to reach out!
