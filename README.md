# MERN Stack Boilerplate with Google Authentication

This is a MERN (MongoDB, Express.js, React, Node.js) stack boilerplate with Google OAuth 2.0 authentication. It provides a foundation for building web applications that require user authentication using Google accounts.

## Features

- MongoDB for database storage
- Express.js for server-side application logic
- React for the frontend user interface
- Node.js as the backend runtime environment
- Passport.js for handling Google OAuth 2.0 authentication
- JWT (JSON Web Tokens) for secure authentication token generation
- React Router DOM for client-side routing

## Prerequisites

Before running the project, make sure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/DineshRout779/mern-google-auth-boilerplate.git
   ```

2. Install dependencies:

   ```bash
   # inside client
   cd client
   npm install
   ```

   ```bash
   # inside server
   cd server
   npm installl
   ```

3. Set up environment variables

   Create .env file both inside client and server directory and copy the variables in .env.example in each directory.

## Google OAuth 2.0 Setup

To enable Google authentication, follow these steps:

1. Go to the Google Developer Console.
2. Create a new project.
3. Enable the "Google+ API" in the Library section.
4. Go to the "Credentials" tab and create credentials (OAuth client ID).
   - Choose "Web application" as the application type.
   - Set the authorized redirect URI to http://localhost:3000/auth/google/callback (adjust as needed).
5. Copy the generated client ID and client secret to your .env file.

## Contributing

Feel free to contribute to this project. Create issues, submit pull requests, or suggest improvements.

## License

This project is licensed under the MIT License.
