# Myspace Social Network API

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Myspace Social Network API is a backend application designed to manage users, thoughts, reactions, and friendships for a social media platform. It leverages MongoDB and Mongoose for database operations, providing a robust solution for handling large amounts of unstructured data.

## Features

- User management: Create, update, delete users.
- Thought management: Post, update, delete thoughts.
- Reaction management: Add and remove reactions to thoughts.
- Friend management: Add and remove friends.

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
  ```bash
   git clone (https://github.com/SailorVirgo/Myspace-Social-Network-API.git)
   ```

2. Navigate to the project directory:
  ```bash
  cd Myspace-Social-Network-API
  ```

3. Install the dependencies:
  ```bash
  npm install
  ```

4. Start the server:
  ```bash
  npm start
  ```


## Usage

Once the server is running, you can interact with the API using tools like Insomnia or Postman. The API supports CRUD operations for users, thoughts, reactions, and friendships.


## Environment Variables
- Ensure you have a .env file with the following environment variables:
  ```bash
  MONGODB_URI=mongodb://localhost:27017/socialnetwork
  PORT=3001
  ```

## Demo

Link to Demo 
https://watch.screencastify.com/v/K4QCQNOMtBrsc4uBUqJW



## API Endpoints

### Users
- `GET /api/users` - Get all users.
- `GET /api/users/:id` - Get a single user by ID.
- `POST /api/users` - Create a new user.
- `PUT /api/users/:id` - Update a user by ID.
- `DELETE /api/users/:id` - Delete a user by ID.
- `POST /api/users/:userId/friends/:friendId` - Add a friend to a user.
- `DELETE /api/users/:userId/friends/:friendId` - Remove a friend from a user.
### Thoughts
-  `GET /api/thoughts` - Get all thoughts.
-  `GET /api/thoughts/:id` - Get a single thought by ID.
-  `POST /api/thoughts` - Create a new thought.
-  `PUT /api/thoughts/:id` - Update a thought by ID.
-  `DELETE /api/thoughts/:id` - Delete a thought by ID.
### Reactions
- `POST /api/thoughts/:thoughtId/reactions` - Add a reaction to a thought.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Remove a reaction from a thought.
### Technologies Used
`Node.js` - JavaScript runtime environment.
`Express.js` - Web framework for Node.js.
`MongoDB` - NoSQL database.
`Mongoose` - MongoDB object modeling tool.
`dotenv` - Environment variable management.

Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request.

License
This project is licensed under the MIT License.
   
