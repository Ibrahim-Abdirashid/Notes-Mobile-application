# 📝 Note-Taking Application

A simple and efficient note-taking application built using **React Native** for the frontend and the **MERN Stack** (MongoDB, Express.js, React Native, Node.js) for the backend. This application allows users to view existing notes and create new ones.

---

## ✨ Features

* **View Notes:** Fetches and displays all existing notes from the MongoDB database.
* **Create Note:** Allows users to input a title and content to create and save a new note to the database.

## 💻 Technologies Used

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** (Mobile) | React Native | Cross-platform mobile user interface framework. |
| **Backend** (Server) | Node.js / Express.js | Server-side runtime environment and web framework. |
| **Database** | MongoDB | NoSQL database for flexible data storage. |
| **ORM/ODM** | Mongoose | Object Data Modeling (ODM) library for MongoDB and Node.js. |

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### 1. Prerequisites

Make sure you have the following installed:
* Node.js (LTS version recommended)
* npm or yarn
* React Native development environment (e.g., Expo CLI or React Native CLI)
* A running MongoDB instance or connection string (e.g., MongoDB Atlas).

### 2. Backend Setup (Node.js/Express)

1.  Navigate to the `backend` directory.
    ```bash
    cd backend
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Configure Environment Variables:** Create a `.env` file in the backend root and add your database connection URI.
    ```
    MONGO_URI=your_mongodb_connection_string_here
    PORT=5000
    ```
4.  Start the backend server:
    ```bash
    npm start
    # or
    yarn start
    ```
    > The server will typically run on `http://localhost:5000`.

### 3. Frontend Setup (React Native)

1.  Navigate to the `frontend` directory.
    ```bash
    cd ../frontend
    ```
2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Update API URL:** Update the base URL in your application's API configuration to match your backend server's address. Use your machine's IP address if testing on a physical device, or `localhost`/`10.0.2.2` (for Android emulator).
    ```javascript
    const API_URL = 'http://YOUR_IP_ADDRESS_OR_LOCALHOST:5000/api/notes';
    ```
4.  Run the application:
    ```bash
    npx react-native run-android
    # or
    npx react-native run-ios
    # (Use 'expo start' if you are using Expo)
    ```

---

## 🤝 Contributing

We welcome contributions! Please feel free to fork the repository and submit pull requests.

## 📜 License

This project is licensed under the **MIT License**.
