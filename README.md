# Postmeow Backend



## Description

The **Postmeow Backend** is the server-side component of the Postmeow platform, developed entirely in TypeScript. It provides the necessary APIs and database interactions to support the frontend ([Postmeow Frontend](https://github.com/WixBe/Postmeow-frontend)) in managing user posts and related operations.

## Features

- **TypeScript-Powered**: Fully typed backend for increased code safety and maintainability.
- **RESTful API**: Provides clean and efficient endpoints for seamless frontend integration.
- **Scalable and Secure**: Designed to handle multiple requests while ensuring data security.
- **Database Integration**: Manages persistent storage for posts and user data.

## Technology Stack

This repository is written entirely in:
- **TypeScript** (100%)

## Prerequisites

- Node.js version 14 or higher.
- PostgreSQL or other compatible database system.
- [Postmeow Frontend](https://github.com/WixBe/Postmeow-frontend) to interact with this backend.

## Installation

To set up the backend locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/WixBe/Postmeow-backend.git
2. Navigate to the project directory:
   ```bash
   cd Postmeow-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
    - Create a .env file in the root directory.
    - Add the following variables:
    ```code
    DATABASE_URL=postgresql://username:password@localhost:5432/postmeow
    PORT=4000
    ```
5. Run database migrations:
   ```bash
   npm run migrate
   ```
6. Start the server:
   ```bash
   npm run start
   ```
   
## Usage

The server will be available at http://localhost:4000. Use tools like Postman or cURL to interact with the API.
Use the POSTMEOW-frontend [https://github.com/WixBe/Postmeow-frontend] with this backend for the combined experience.

## Directory Structure

```plaintext
.
├── src/                # Source code for the backend
├── config/             # Configuration files
├── tests/              # Unit and integration tests
├── docs/               # API documentation
├── README.md           # Project documentation
└── package.json        # Dependency and script management
```

## API Documentation
For detailed API documentation, refer to the docs/ directory or access the Swagger UI (if available).
