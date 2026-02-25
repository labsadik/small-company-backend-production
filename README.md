## Overview

This is a **small-production-ready backend** for a company website or web application.
It supports:

* User authentication (register/login)
* Admin-only dashboard
* User management (view & delete users)
* Announcement system (create, edit, delete, view)
* MongoDB Atlas cloud storage
* JWT authentication
* Role-based access control (Admin/User)
* Environment-based configuration (.env)
* Production-level security (helmet, rate limiting, password hashing)

---

## 🗂 Folder Structure

```
company-backend/
│
├── src/
│   ├── config/           # Database and roles
│   ├── controllers/      # Route logic for auth, users, announcements
│   ├── middleware/       # Authentication, role-based access, error handling
│   ├── models/           # Mongoose schemas (User, Announcement)
│   ├── routes/           # API routes
│   ├── utils/            # JWT token generator
│   └── app.js            # Express app setup
│
├── .env                   # Environment variables
├── server.js              # Server entry point
├── package.json
└── .gitignore
```

---

## ⚡ Features

* **Authentication**: Register/Login with JWT
* **Authorization**: Role-based access (Admin/User)
* **Admin-only actions**:

  * View all users
  * Delete users
  * Manage announcements (create/edit/delete)
* **Users**:

  * View announcements
* **Secure**:

  * Password hashing (bcrypt)
  * Helmet middleware
  * Rate limiting
  * JWT expiry
* **Database**:

  * MongoDB Atlas Cloud
  * `.env` for sensitive credentials

---

## 🔧 Setup Instructions

### 1️⃣ Clone / Extract

Extract the ZIP file:

```bash
company-backend-production.zip
```

---

### 2️⃣ Install Dependencies

```bash
cd company-backend
npm install
```

---

### 3️⃣ Configure `.env`

Create `.env` (or edit existing) with your MongoDB Atlas credentials:

```env
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=supersecretjwtkey
JWT_EXPIRES_IN=7d
```

**⚠ Note**: Replace `<Your MongoDB URI>` with your MongoDB connection string.

---

### 4️⃣ MongoDB Atlas Setup

1. Make sure your **cluster is running**
2. Add your **IP to Network Access**

   * Home WiFi → Works fine
   * Mobile hotspot → May **fail** using `mongodb+srv://` (see notes below)
3. Test cluster by pinging or using Compass

---

### 5️⃣ Running the Backend

**Development mode (auto-reload on code change):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

Server runs by default on `http://localhost:5000`.

---

## 🌐 API Endpoints

### Auth

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

### Users (Admin-only)

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/users     | Get all users |
| DELETE | /api/users/:id | Delete a user |

### Announcements

| Method | Endpoint               | Access     | Description         |
| ------ | ---------------------- | ---------- | ------------------- |
| GET    | /api/announcements     | All users  | View announcements  |
| POST   | /api/announcements     | Admin only | Create announcement |
| PUT    | /api/announcements/:id | Admin only | Edit announcement   |
| DELETE | /api/announcements/:id | Admin only | Delete announcement |

---

## 📱 Mobile Hotspot Notes

* MongoDB Atlas `mongodb+srv://` URLs use **SRV DNS**.
* Many mobile hotspots (Jio, Airtel, VI) **block SRV DNS**, so you may see:

```text
ECONNREFUSED _mongodb._tcp.cluster0.2ikn5ye.mongodb.net
```

* ✅ Solutions:

  1. Use **Home/Office WiFi** → works fine
  2. Use **non-SRV URL (`mongodb://…`)** from Atlas
  3. Change your PC DNS to Google DNS (`8.8.8.8` / `8.8.4.4`)

---

## ⚙ Recommended Production Enhancements

* Add logging (Winston / Morgan)
* Enable HTTPS for production
* Setup Docker / containerized deployment
* Use environment secrets for JWT and DB credentials
* Add refresh token / email verification system

---

## 👨‍💻 How to Use

1. Set up MongoDB Atlas cluster
2. Update `.env` with credentials
3. Run `npm run dev` or `npm start`
4. Connect frontend to API endpoints
5. Admin can manage users & announcements, regular users can view announcements

---

✅ Ready for **integration with any web app or company website**.


