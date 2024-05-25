# Backend Developer Assignment: Authentication API

This project implements an Authentication API using Node.js, Express, and MongoDB. It includes functionalities such as user signup, login, and accessing protected routes using JWT authentication.


## Installation and Setup

1. **Clone the Repository**: `https://github.com/JayaramHarry/SkyGoalTech---Backend-Assignment.git`
2. **Install Dependencies**: Run `npm install` to install all required dependencies.
3. **Set Environment Variables**: Create a `.env` file and add the following:
    ```
    JWT_SECRET_KEY=your_secret_key_here
    ```
   Replace `your_secret_key_here` with a strong and secure secret key for JWT token signing.
4. **Start MongoDB**: Ensure MongoDB is running on your system.
5. **Start the Server**: Run `npm start` to start the server. By default, the server will run on port 3000.

## API Endpoints

### 1. Signup

- **Endpoint**: `/auth/signup`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
Response:
json
Copy code
{
  "message": "User created successfully"
}
2. Login
Endpoint: /auth/login
Method: POST
Request Body:
json
Copy code
{
  "email": "user@example.com",
  "password": "password123"
}
Response:
json
Copy code
{
  "token": "your_jwt_token"
}
3. Protected Route
Endpoint: /protected
Method: GET
Headers:
makefile
Copy code
Authorization: Bearer your_jwt_token
Response:
json
Copy code
{
  "message": "Accessing protected route successful"
}
Error Handling
The project includes basic error handling. If an error occurs during API requests, the server will respond with a status code of 500 and a message Something went wrong!.

