# Full-Stack Quiz Website

A fully-featured interactive quiz platform that allows users to test their programming knowledge across various categories and difficulty levels. Built with **React** for the frontend, **Spring Boot** for the backend, and **PostgreSQL** as the database hosted on **Neon DB**, this application provides a seamless and engaging user experience. The backend is hosted on **Render**, while the frontend is deployed on **Netlify**.

Visit the live site: [Quiz For Programmers](https://quizforprogrammers.netlify.app/)

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Frontend](#frontend)
- [Backend](#backend)
- [Database](#database)
- [Deployment](#deployment)
- [Features](#features)
- [Future Features](#future-features)
- [Installation Guide](#installation-guide)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The **Full-Stack Quiz Website** provides a platform for users to engage in quizzes on various programming topics. With a responsive user interface and a robust backend, users can answer questions, track their scores, and participate in different categories and levels (easy, medium, and hard). The backend is built using **Spring Boot** and communicates with a **PostgreSQL** database to store quiz data. The frontend is built using **React** and interacts with the backend via **RESTful APIs**.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Spring Boot (Java)
- **Database**: PostgreSQL (hosted on Neon DB)
- **Hosting/Deployment**: 
  - Frontend: Netlify
  - Backend: Render
- **API**: RESTful APIs for communication between frontend and backend.

## Frontend

The frontend of this project is built using **React.js**. It handles the user interface and client-side logic of the quiz system, allowing users to interact with the platform in a seamless way. The frontend interacts with the backend through HTTP requests to fetch quiz questions and submit answers.

### Key Features:

- Dynamic rendering of quiz questions.
- User-friendly interface with categories and difficulty levels (easy, medium, hard).
- Real-time score tracking after quiz submission.
- Responsive design for mobile and desktop devices.
- Error handling and loading states to ensure smooth user experience.

### Technologies Used:

- **React** for UI development.
- **React Router** for navigation.
- **Axios/Fetch API** for handling HTTP requests to the backend.
- **Tailwind CSS** for styling the components.

## Backend

The backend is built using **Spring Boot**, which handles the logic for serving quiz questions, storing user responses, and calculating scores. The backend exposes **RESTful APIs** to allow the frontend to interact with the server.

### Key Features:

- Serve quiz questions based on quiz ID.
- Process and store user responses.
- Calculate and return the quiz score.
- Authentication endpoints for user login and admin access.

### Technologies Used:

- **Spring Boot** for backend development.
- **Spring Security** for securing endpoints (planned for future user and admin authentication).
- **JPA (Hibernate)** for database interaction.
- **PostgreSQL** for storing quiz questions, user responses, and other necessary data.

## Database

The database used for this project is **PostgreSQL**, hosted on **Neon DB**. It stores the quiz data, user responses, and other relevant information. The backend communicates with the database using **JPA** (Java Persistence API) and **Hibernate** for ORM (Object-Relational Mapping).

### Database Structure:

- **Quiz Table**: Stores quiz questions, options, and correct answers.
- **User Table**: Stores user information (to be implemented in future features).
- **Responses Table**: Stores the user's selected responses for each quiz.

## Deployment

- **Frontend** is deployed on **Netlify**, providing a fast and efficient static hosting solution.
- **Backend** is hosted on **Render**, offering a cloud platform to run the Spring Boot application.
- **Database** is hosted on **Neon DB**, providing a reliable PostgreSQL database as a service.

## Features

### Current Features:

- **Quiz Categories**: Users can select from various categories of questions.
- **Difficulty Levels**: Supports easy, medium, and hard difficulty levels.
- **Real-time Score Tracking**: Users can see their score after submitting their quiz.
- **Dynamic Question Rendering**: Fetches and displays questions from the backend dynamically.

### Future Features:

- **User Login and Authentication**: Allow users to register and log in to save their scores and track progress.
- **Admin Authentication**: Admin users will be able to log in and manage the quiz content.
- **Admin Functionality**: Admins will be able to insert, delete, and edit quiz questions from the platform.
- **Categories and Difficulty Levels**: Expand quiz categories and improve the difficulty system (easy, medium, hard).
- **Daily Challenges**: Add a daily challenge feature where users can take a special quiz each day.

## Installation Guide

To run the project locally, follow these steps:

### Prerequisites:

- **Node.js** and **npm** for running the frontend.
- **Java** (JDK 11 or higher) and **Maven** for running the backend.
- A **PostgreSQL** database (Neon DB for cloud-hosted database, or local setup).

### Frontend:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Full-Stack-QuizWebsite.git
    cd Full-Stack-QuizWebsite
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the React application using:
    ```bash
    npm run dev
    ```

   The frontend will be available at `http://localhost:3000`.

### Backend:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Full-Stack-QuizWebsite.git
    cd Full-Stack-QuizWebsite
    cd backend
    ```

2. Install dependencies and build the application using Maven:
    ```bash
    mvn clean install
    ```

3. Run the Spring Boot application:
    ```bash
    mvn spring-boot:run
    ```

   The backend will be available at `http://localhost:8080`.

4. Ensure your PostgreSQL database is set up and configured correctly. You may need to update the application properties (`src/main/resources/application.properties`) with the correct database URL and credentials.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a new pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
