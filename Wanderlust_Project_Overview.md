# Wanderlust Major Project - Overview

## Folder and File Structure

```
Wanderlust Major Project/
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
├── init/
│   ├── data.js
│   └── index.js
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── css/
│   │   ├── rating.css
│   │   └── style.css
│   └── js/
│       └── script.js
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
├── views/
│   ├── error.ejs
│   ├── includes/
│   │   ├── flash.ejs
│   │   ├── footer.ejs
│   │   └── navbar.ejs
│   ├── layouts/
│   │   └── boilerplate.ejs
│   ├── listings/
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
│   │   └── show.ejs
│   └── users/
│       ├── login.ejs
│       └── signup.ejs
├── .gitignore
├── app.js
├── cloudConfig.js
├── middleware.js
├── package.json
├── package-lock.json
├── schema.js
└── README.md (not present but recommended)
```

## Project Description

Wanderlust is a web application inspired by Airbnb, allowing users to explore listings, create new listings, and review them. It features user authentication, session management, and a responsive UI.

## Tools and Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing listings, users, and reviews.
- **Mongoose**: ODM for MongoDB.
- **EJS**: Embedded JavaScript templating for rendering dynamic HTML.
- **Passport.js**: Authentication middleware for user login/signup.
- **Bootstrap 5**: CSS framework for responsive design.
- **FontAwesome**: Icon library used in the UI.
- **Cloudinary**: For image storage and management (based on cloudConfig.js and multer-storage-cloudinary).
- **Joi**: Data validation.
- **Connect-flash**: Flash messages for success/error notifications.
- **Method-override**: To support HTTP verbs like PUT and DELETE in forms.
- **Axios**: For making HTTP requests (likely in frontend JS).
- **dotenv**: For environment variable management.

## How It Is Made

- The backend is built with Express.js, connecting to a MongoDB database using Mongoose.
- User authentication is handled with Passport.js using local strategy.
- The app uses EJS templates for server-side rendering of views.
- Routes are organized into separate files for listings, reviews, and users.
- Controllers handle the business logic for each route.
- Static assets like CSS and JS are served from the public directory.
- The UI uses Bootstrap for layout and styling, with FontAwesome icons.
- Images are uploaded and managed via Cloudinary.
- Validation is done using Joi to ensure data integrity.
- Sessions and flash messages provide user feedback and maintain login state.
- The app listens on port 5000 and connects to a local MongoDB instance.

---

This document provides a comprehensive overview of the Wanderlust project structure, technologies, and architecture.

If you want, I can help you create a README.md file with this content or assist with any other documentation or tasks.
