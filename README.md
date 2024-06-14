Sure, here's the updated `README.md` file reflecting your changes:

```markdown
# Course Management API

A RESTful API for managing courses, users, and tracking progress using Node.js, Express, Sequelize, and MySQL.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Database Configuration](#database-configuration)
- [Endpoints](#endpoints)
- [Usage](#usage)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/8309h/course-management.git
    cd course-management
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root of the project and add your environment variables (see below).

## Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_DATABASE=your_database_name
DB_HOST=localhost
DB_PORT=3306
PORT=3000
JWT_SECRET=your_jwt_secret
```

## Database Configuration

Ensure you have MySQL installed and running. Update the `.env` file with your database credentials.

## Endpoints

### User Authentication

1. **Register a New User**
   - **Method:** POST
   - **Endpoint:** `/api/v1/users/register`
   - **Description:** Register a new user (student or teacher).
   - **Request Body:**
     ```json
     {
         "username": "string",
         "password": "string",
         "email": "string",
         "role": "student" | "teacher"
     }
     ```
   - **Success Response:**
     - **Status Code:** 200 OK
     - **Response Body:**
       ```json
       {
           "message": "User registered successfully."
       }
       ```

2. **Authenticate a User**
   - **Method:** POST
   - **Endpoint:** `/api/v1/users/login`
   - **Description:** Authenticate a user and provide a token.
   - **Request Body:**
     ```json
     {
         "username": "string",
         "password": "string"
     }
     ```
   - **Success Response:**
     - **Status Code:** 200 OK
     - **Response Body:**
       ```json
       {
           "token": "jwt_token"
       }
       ```

### Course Management

1. **Retrieve All Courses**
   - **Method:** GET
   - **Endpoint:** `/api/v1/courses`
   - **Description:** Retrieve a list of all courses.
   - **Success Response:**
     - **Status Code:** 200 OK
     - **Response Body:**
       ```json
       [
           {
               "CourseID": 1,
               "Title": "Course Title",
               "Description": "Course Description",
               "TeacherID": 1,
               "created_at": "timestamp",
               "updated_at": "timestamp"
           },
           ...
       ]
       ```

2. **Retrieve Details of a Specific Course**
   - **Method:** GET
   - **Endpoint:** `/api/v1/courses/:id`
   - **Description:** Retrieve details of a specific course.
   - **URL Parameters:**
     - `id` (integer): Course ID
   - **Success Response:**
     - **Status Code:** 200 OK
     - **Response Body:**
       ```json
       {
           "CourseID": 1,
           "Title": "Course Title",
           "Description": "Course Description",
           "TeacherID": 1,
           "created_at": "timestamp",
           "updated_at": "timestamp",
           "Lessons": [
               {
                   "LessonID": 1,
                   "Title": "Lesson Title",
                   "Content": "Lesson Content",
                   "CourseID": 1,
                   "created_at": "timestamp",
                   "updated_at": "timestamp"
               },
               ...
           ]
       }
       ```

3. **Create a New Course (Teachers Only)**
   - **Method:** POST
   - **Endpoint:** `/api/v1/courses`
   - **Description:** Create a new course.
   - **Request Header:** `Authorization: Bearer jwt_token`
   - **Request Body:**
     ```json
     {
         "title": "string",
         "description": "string"
     }
     ```
   - **Success Response:**
     - **Status Code:** 200 OK
     - **Response Body:**
       ```json
       {
           "message": "Course created successfully.",
           "course": {
               "CourseID": 1,
               "Title": "Course Title",
               "Description": "Course Description",
               "TeacherID": 1,
               "created_at": "timestamp",
               "updated_at": "timestamp"
           }
       }
       ```

4. **Update a Course (Teachers Only)**
   - **Method:** PUT
   - **Endpoint:** `/api/v1/courses/:id`
   - **Description:** Update a course.
   - **Request Header:** `Authorization: Bearer jwt_token`
   - **Request Body:**
     ```json
     {
         "title": "string",
         "description": "string"
     }
     ```
   - **Success Response:**
     - **Status Code:** 200 OK
     - **Response Body:**
       ```json
       {
           "message": "Course updated successfully.",
           "course": {
               "CourseID": 1,
               "Title": "Updated Title",
               "Description": "Updated Description",
               "TeacherID": 1,
               "created_at": "timestamp",
               "updated_at": "timestamp"
           }
       }
       ```

5. **Delete a Course (Teachers Only)**
   - **Method:** DELETE
   - **Endpoint:** `/api/v1/courses/:id`
   - **Description:** Delete a course.
   - **Request Header:** `Authorization: Bearer jwt_token`
   - **Success Response:**
     - **Status Code:** 200 OK
     - **Response Body:**
       ```json
       {
           "message": "Course deleted successfully."
       }
       ```

### Progress Tracking

1. **Retrieve Progress for a Specific User**
   - **Method:** GET
   - **Endpoint:** `/api/v1/progress/:userId`
   - **Description:** Retrieve progress for a specific user.
   - **Request Header:** `Authorization: Bearer jwt_token`
   - **URL Parameters:**
     - `userId` (integer): User ID
   - **Success Response:**
     - **Status Code:** 200 OK
     - **Response Body:**
       ```json
       [
           {
               "ProgressID": 1,
               "UserID": 1,
               "CourseID": 1,
               "Progress": 80,
               "created_at": "timestamp",
               "updated_at": "timestamp"
           },
           ...
       ]
       ```

2. **Update Progress for a Specific User**
   - **Method:** POST
   - **Endpoint:** `/api/v1/progress/:userId`
   - **Description:** Update progress for a specific user.
   - **Request Header:** `Authorization: Bearer jwt_token`
   - **URL Parameters:**
     - `userId` (integer): User ID
   - **Request Body:**
     ```json
     {
         "course_id": 1,
         "progress": 80
     }
     ```
   - **Success Response:**
     - **Status Code:** 200 OK
     - **Response Body:**
       ```json
       {
           "message": "Progress updated successfully.",
           "progress": {
               "ProgressID": 1,
               "UserID": 1,
               "CourseID": 1,
               "Progress": 80,
               "created_at": "timestamp",
               "updated_at": "timestamp"
           }
       }
       ```
