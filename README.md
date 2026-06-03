# 🎓 Event Management System

A full-stack Event Management System built to streamline and automate college event management processes. The platform provides dedicated dashboards for students and administrators, enabling efficient event registration, approval workflows, participant tracking, and report generation.

## 📌 Overview

Managing college events manually often results in inefficiencies, data inconsistencies, and increased administrative workload. This project provides a centralized and secure platform that automates the entire event management lifecycle.

---

## 🚀 Problem Statement

Traditional event management processes involve manual registration, participant tracking, approval handling, and report generation. These processes are often time-consuming and prone to errors.

---

## 💡 Solution

Developed a web-based Event Management System with:

* Student Dashboard
* Admin Dashboard
* Role-Based Access Control (RBAC)
* Secure Authentication
* Event Registration Workflow
* Participant Management
* Automated Reporting

---

## 🎯 Goal

To provide a scalable, secure, and user-friendly platform for managing college events efficiently while reducing manual administrative effort.

---

## 👨‍💻 My Role

**Full-Stack Developer**

Responsibilities:

* Designed and developed frontend and backend architecture
* Implemented authentication and authorization
* Built RESTful APIs
* Designed MongoDB database schemas
* Developed admin and student dashboards
* Integrated PDF report generation
* Managed deployment and testing

---

## 📅 Project Details

| Field    | Value                      |
| -------- | -------------------------- |
| Duration | Feb 2025 – Mar 2025        |
| Status   | Completed                  |
| Type     | Full-Stack Web Application |

---

## ✨ Features

### Student Module

* User Registration & Login
* Secure Authentication
* Event Browsing
* Event Registration
* Registration Status Tracking
* Profile Management

### Admin Module

* Dashboard Analytics
* Event Creation & Management
* Student Approval Workflow
* Participant Tracking
* User Management
* PDF Report Generation

### Security Features

* JWT Authentication
* NextAuth Integration
* Password Hashing with bcryptjs
* Role-Based Access Control (RBAC)
* Protected Routes

---

## 🛠️ Tech Stack

### Frontend

* Next.js 15
* React 19
* Tailwind CSS
* Flowbite React
* Axios

### Backend

* Next.js API Routes
* JWT Authentication
* NextAuth

### Database

* MongoDB
* Mongoose

### Security

* bcryptjs
* JWT
* Role-Based Access Control (RBAC)

### Utilities

* jsPDF

---

## 🏗️ Architecture

```text
Student/Admin
      │
      ▼
 Next.js Frontend
      │
      ▼
 API Routes
      │
      ▼
 Authentication Layer
 (NextAuth + JWT)
      │
      ▼
 MongoDB Database
```

## 🔐 Authentication Flow

1. User logs in using credentials.
2. Password is verified using bcryptjs.
3. JWT token is generated.
4. NextAuth manages session handling.
5. Protected routes are accessible based on user roles.

---

## 📊 Key Achievements

* Successfully handled event management workflows.
* Implemented secure role-based authorization.
* Automated participant tracking and reporting.
* Reduced manual administrative processes.
* Designed scalable database architecture using MongoDB.

---

## 📸 Screenshots

Add application screenshots here.

```md
/screenshots
├── login.png
├── dashboard.png
├── event-list.png
├── event-registration.png
└── report-generation.png
```

---

## ⚙️ Installation

```bash
git clone https://github.com/yourusername/event-management-system.git

cd event-management-system

npm install

npm run dev
```

---

## 🌐 Environment Variables

```env
MONGODB_URI=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
JWT_SECRET=
```

---

## 📈 Future Enhancements

* Email Notifications
* Event Attendance QR System
* Certificate Generation
* Real-Time Notifications
* Event Feedback Module
* Multi-College Support

---

## 👤 Author

**Rakkesh Kumar J**

* MERN Stack Developer
* LinkedIn: https://linkedin.com/in/rakkeshit
* GitHub: https://github.com/RakkeshIT
* Portfolio: https://rakkeshaifolio.vercel.app

---

⭐ If you found this project useful, please consider giving it a star.
