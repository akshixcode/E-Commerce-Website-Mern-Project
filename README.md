# MERN E-Commerce Application

## Project Overview

This project is a full-stack MERN E-Commerce Application developed using modern web technologies. The application includes authentication, product management, admin dashboard functionality, API integration, and order handling features.

The main objective of this project was to build a scalable e-commerce platform while improving practical understanding of frontend, backend, API integration, authentication, and database management.

---Below  is the Demo Link Of the Running Project

# Tech Stack

## Frontend

* Next.js
* React.js
* Redux Toolkit
* React Hook Form
* Axios
* React Hot Toast
* JWT Decode
* Tailwind CSS / Global CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* Multer
* Express Validator
* Cookie Parser
* Helmet
* Morgan

---

# Project Structure

```bash
E-comm/
│
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   └── my-app/
│       ├── app/
│       ├── public/
│       ├── store/
│       ├── utils/
│       └── package.json
│
└── README.md
```

---

# Features Implemented

## Authentication System

* User Signup
* User Login
* JWT-based Authentication
* Protected Routes
* Role-based Access Handling
* Password Encryption using bcryptjs

## Product Management

* Product Creation API
* Product Retrieval API
* Product Schema Management
* Product Controller Setup
* Admin Product Handling

## Order Management

* Order API Setup
* Order Model Creation
* Backend Order Controller

## Admin Dashboard

* Dashboard Layout
* Product Management Section
* Admin Route Handling
* Product Upload Flow

## File Upload Functionality

* Image Upload Middleware using Multer
* Backend Image Handling

## Frontend Features

* Form Handling with React Hook Form
* Redux Toolkit State Management
* API Integration using Axios
* Toast Notifications
* Authentication State Handling

## Security & Middleware

* Helmet Integration
* Cookie Parser
* Request Logging using Morgan
* Error Middleware

---

# Backend APIs Implemented

## Authentication APIs

* Register User
* Login User
* Authentication Middleware

## Product APIs

* Create Product
* Fetch Products
* Product Controller Integration

## Order APIs

* Create Order
* Manage Orders

---

# Database Design

## Collections Used

* Users
* Products
* Orders

## MongoDB Features Used

* Schema-based Models
* Mongoose Validation
* Relationships & References

---

# Environment Variables Required

Create a `.env` file inside the Backend folder.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

# Installation & Setup

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend Setup

```bash
cd Backend
npm install
npm run dev
```

Backend server will start on:

```bash
http://localhost:5000
```

---

## Frontend Setup

```bash
cd Frontend/my-app
npm install
npm run dev
```

Frontend server will start on:

```bash
http://localhost:3000
```

---

# Current Development Status

The project is currently under active development.

Several core functionalities have already been implemented successfully, including:

* Authentication System
* Backend APIs
* Product Management APIs
* Dashboard Structure
* Database Integration
* File Upload Middleware
* State Management

However, some modules are still under development and require further improvements and integration.

---

# Pending Requirements / Work To Be Done

## 1. Add To Cart Page Integration

* Add to Cart APIs have already been created.
* Frontend integration issues are currently occurring.
* Cart state synchronization and UI updates still need debugging.

## 2. Product Image Rendering in Admin Dashboard

* Product upload functionality has been implemented.
* However, uploaded product images are currently not rendering properly inside the admin dashboard.
* Image path handling and frontend rendering logic need further fixes.

## 3. AI Chatbot Integration

* AI-powered chatbot functionality is planned.
* Chatbot integration and conversational support system are still pending.

## 4. Product Overview Page

* Product overview/detail page still needs to be completed.
* Product detail rendering and dynamic routing remain under development.

---

# Challenges Faced During Development

* API Integration Issues
* Frontend State Synchronization
* Authentication Flow Handling
* File Upload & Image Rendering
* Dashboard Data Rendering
* Backend and Frontend Route Coordination

---

# Learning Outcomes

Through this project, I gained practical experience in:

* MERN Stack Development
* REST API Creation
* Authentication & Authorization
* MongoDB Database Handling
* Frontend State Management
* Middleware Usage
* File Upload Handling
* Project Structuring
* Debugging Full Stack Applications

---

# Developer Note

This project was developed as part of my learning and practical implementation journey.

I would also like to mention that I have not yet fulfilled all the project requirements completely. My primary area of interest and understanding has been more inclined toward Cloud Computing and Testing domains rather than deep full-stack development.

Despite that, I genuinely enjoyed working on this project and learned a lot during the development process.

I would really like to continue improving and working on this project even after the submission phase in order to enhance the missing functionalities, improve the architecture, and gain deeper development understanding.

---

# Future Improvements

* Complete Cart Functionality
* Complete Product Overview Page
* Integrate AI Chatbot
* Improve Admin Dashboard UI
* Add Payment Gateway Integration
* Add Order Tracking
* Optimize Image Handling
* Improve Error Handling
* Add Testing & Deployment Pipelines
* Improve Responsive Design

---

# Conclusion

This project represents a strong foundational implementation of a MERN E-Commerce platform with authentication, APIs, dashboard management, and backend architecture.

Although some functionalities are still under development, the project demonstrates practical exposure to full-stack development concepts, REST APIs, MongoDB integration, and frontend-backend communication.

The project will continue to evolve with further improvements and feature completion in future development phases.


