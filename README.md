# Confidential Patient Records System

A secure, full-stack web application for managing confidential patient medical records with role-based access control, authentication, and data encryption.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Security Features](#security-features)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

The Confidential Patient Records System is designed to provide healthcare organizations with a secure platform for managing sensitive patient information. Built with modern web technologies, it ensures data privacy, integrity, and accessibility for authorized personnel only.

This project demonstrates enterprise-grade security practices including authentication, authorization, encryption, and secure data handling for healthcare applications.

## ✨ Features

### Core Functionality
- **Secure Patient Record Management**: Create, read, update, and manage patient medical records
- **Role-Based Access Control (RBAC)**: Different permission levels for doctors, nurses, administrators, and staff
- **User Authentication**: JWT-based authentication with secure password hashing (bcryptjs)
- **Email Notifications**: Automated email alerts and communications via Nodemailer
- **CSV Import/Export**: Batch import and export patient data with data validation
- **Audit Logging**: Track and monitor access to sensitive records

### Security
- Password encryption with bcryptjs
- JWT token-based authentication
- CORS protection
- Environment-based configuration
- Input validation with Validator
- Secure session management with cookies

### Data Management
- MongoDB database integration
- CSV to JSON data conversion
- File upload handling with Multer
- Automatic data scheduling with node-cron
- Real-time data synchronization

### Frontend UI
- Material-UI components for modern interface
- React-based responsive design
- Data grids and calendar views
- Form validation with Formik and Yup
- PDF export capabilities with jsPDF
- Real-time alerts and notifications

## 🛠 Tech Stack

### Backend
- **Runtime**: Node.js (v16+)
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Security**: bcryptjs, CORS, body-parser, cookie-parser
- **File Processing**: Multer, csv-to-json, fast-csv
- **Email**: Nodemailer
- **Scheduling**: node-cron
- **Validation**: Validator

### Frontend
- **UI Framework**: React 17
- **UI Library**: Material-UI (MUI) v5
- **State Management**: Redux with Redux Thunk
- **Routing**: React Router v6
- **Forms**: Formik with Yup validation
- **Charts**: ApexCharts with React integration
- **Data Grid**: MUI X Data Grid
- **Calendar**: FullCalendar v5
- **PDF Export**: jsPDF with html-to-pdfmake
- **Styling**: SCSS with Material-UI styles

### Development & Tooling
- **Package Manager**: npm
- **Dev Server**: Nodemon
- **Linting**: ESLint with Airbnb config
- **Task Scheduler**: Concurrent development environments

## 📁 Project Structure

```
Confidential-Patient-Records/
├── backend/                       # Node.js/Express backend
│   ├── backend/                   # Core backend modules
│   ├── server.js                  # Main server entry point
│   └── files/                     # Temporary file storage
├── frontend/                      # React frontend application
│   ├── src/                       # React components and logic
│   ├── public/                    # Static assets
│   ├── package.json               # Frontend dependencies
│   └── README.md                  # Frontend-specific documentation
├── package.json                   # Root dependencies
├── package-lock.json              # Dependency lock file
├── FINAL_REPORT(signed).docx      # Project report
├── Final PPT.pptx                 # Project presentation
└── G-80_FINALREVIEW.zip           # Final review materials
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** v16 or higher
- **npm** (comes with Node.js)
- **MongoDB** (local or cloud instance like MongoDB Atlas)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rohith2341/Confidential-Patient-Records.git
   cd Confidential-Patient-Records
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   npm install --prefix frontend
   ```

### Configuration

1. **Create a `.env` file in the root directory** with the following variables:
   ```env
   # Server Configuration
   NODE_ENV=DEVELOPMENT
   PORT=5000
   
   # Database Configuration
   MONGODB_URI=mongodb://localhost:27017/patient-records
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/patient-records
   
   # JWT Configuration
   JWT_SECRET=your_jwt_secret_key_here
   JWT_EXPIRE=7d
   
   # Email Configuration (Nodemailer)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   
   # Frontend Configuration
   REACT_APP_API_URL=http://localhost:5000
   ```

2. **Ensure MongoDB is running**
   - Local: `mongod`
   - Cloud: Use MongoDB Atlas connection string

### Running the Application

#### Development Mode

**Option 1: Run backend and frontend separately**
```bash
# Terminal 1 - Backend
npm run dev

# Terminal 2 - Frontend
npm run frontend
```

**Option 2: Run both concurrently**
```bash
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

#### Production Mode
```bash
npm run prod
```

#### Heroku Deployment
```bash
npm run heroku-postbuild
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `GET /api/auth/profile` - Get authenticated user profile

### Patient Records Endpoints
- `GET /api/patients` - Get all patient records (paginated)
- `POST /api/patients` - Create a new patient record
- `GET /api/patients/:id` - Get patient details
- `PUT /api/patients/:id` - Update patient record
- `DELETE /api/patients/:id` - Delete patient record
- `POST /api/patients/import` - Bulk import from CSV
- `GET /api/patients/export` - Export to CSV

### Admin Endpoints
- `GET /api/admin/users` - List all users
- `PUT /api/admin/users/:id` - Update user role/permissions
- `GET /api/admin/audit-log` - View access logs

## 🔐 Security Features

- **Password Security**: Passwords hashed with bcryptjs (10+ rounds)
- **JWT Authentication**: Stateless, token-based authentication
- **CORS**: Cross-Origin Resource Sharing configured for authorized domains
- **Input Validation**: All inputs validated and sanitized
- **Environment Variables**: Sensitive data stored in `.env` (not in version control)
- **Cookie Security**: Secure, HTTP-only cookies for session management
- **Data Encryption**: Fields can be encrypted at database level
- **Access Control**: Role-based permissions for different user types
- **Audit Trails**: All record access logged and auditable

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeatureName`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeatureName`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## ⚠️ Important Security Notes

- **Never commit `.env` files** to version control
- **Keep dependencies updated** with `npm audit fix`
- **Use environment-specific configurations** for development, testing, and production
- **Implement HTTPS** in production environments
- **Use strong JWT secrets** (minimum 32 characters recommended)
- **Regularly backup** patient data
- **Follow HIPAA/GDPR compliance** requirements for healthcare data

## 📞 Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

## 🎓 Project Context

This is a research/educational project demonstrating secure healthcare information system design patterns and best practices for handling confidential patient records in a web application environment.

---

**Built with ❤️ for secure healthcare data management**
