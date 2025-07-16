# Wanderlust - Your Ultimate Travel & Accommodation Platform

## Project Overview

Wanderlust is a modern, full-stack web application inspired by popular accommodation booking platforms like Airbnb. It allows users to explore a diverse range of property listings, create and manage their own listings, and share their experiences through reviews. Built with a focus on user experience and robust functionality, Wanderlust provides a seamless platform for both hosts and travelers.

**Live Demo:** (If you have a deployed version, add the link here, e.g., `[Wanderlust Live Demo](https://your-deployed-url.com)`)

## Features

* **User Authentication:** Secure signup, login, and logout functionalities using Passport.js.
* **Property Listings:** Browse, view details, create new listings, and manage existing ones.
* **Image Management:** Seamless image uploads and storage via Cloudinary.
* **Reviews & Ratings:** Users can leave reviews and ratings for listings.
* **Authorization:** Ensures users can only manage their own listings and reviews.
* **Search & Filtering:** (If implemented, mention it here, e.g., "Ability to search listings by location/category.")
* **Responsive UI:** Optimized for various screen sizes using Bootstrap 5.
* **Flash Messages:** Instant feedback for user actions (success/error notifications).

## Screenshots

### Homepage - All Listings
![Homepage - All Listings 1](/Screenshots/Screenshot1.png)
*Initial view of all available listings.*

![Homepage - All Listings 2](/Screenshots/Screenshot2.png)
*Scrolling through more diverse listings.*

![Homepage - Welcome Message](/Screenshots/Screenshot3.png)
*Welcome message displayed after successful login/signup.*

### User Authentication

![Sign Up Page - Empty](/Screenshots/Screenshot4.png)
*The user registration form.*

![Sign Up Page - Filled](/Screenshots/Screenshot5.png)
*Example of filled sign-up details.*

![Login Page](/Screenshots/Screenshot6.png)
*The user login interface.*

### Listing Management

![Create New Listing Form - Initial](/Screenshots/Screenshot7.png)
*Form for adding a new property listing.*

![Create New Listing Form - Filled](/Screenshots/Screenshot8.png)
*New listing form with details entered.*

![Listing Details - View Reviews](/Screenshots/Screenshot9.png)
*Detailed view of a listing, showcasing existing reviews.*

![Listing Details - Owner Actions](/Screenshots/Screenshot10.png)
*Owner's view of a listing, showing Edit and Delete options.*

![Edit Listing Form](/Screenshots/Screenshot11.png)
*Interface for modifying an existing listing's details.*

![My Listings / Owner View](/Screenshots/Screenshot12.png)
*A section showing listings owned by the current user.*

![All Listings - Listing Deleted Confirmation](/Screenshots/Screenshot13.png)
*Confirmation message after a listing has been successfully deleted.*

### Review Management

![Add Review Form](/Screenshots/Screenshot14.png)
*Form for submitting a review and rating for a listing.*

![Listing Details - Review Created](/Screenshots/Screenshot15.png)
*Confirmation that a new review has been successfully posted.*

---

## Folder and File Structure
```
Wanderlust Major Project/
├── controllers/
│   ├── listings.js         # Business logic for listing operations
│   ├── reviews.js          # Business logic for review operations
│   └── users.js            # Business logic for user authentication
├── init/
│   ├── data.js             # Initial data for seeding the database
│   └── index.js            # Database initialization script
├── models/
│   ├── listing.js          # Mongoose schema for Listings
│   ├── review.js           # Mongoose schema for Reviews
│   └── user.js             # Mongoose schema for Users
├── public/
│   ├── css/
│   │   ├── rating.css      # Custom CSS for star rating display
│   │   └── style.css       # General custom styles
│   └── js/
│       └── script.js       # Client-side JavaScript
├── routes/
│   ├── listing.js          # Express routes for listings
│   ├── review.js           # Express routes for reviews
│   └── user.js             # Express routes for user authentication
├── utils/
│   ├── ExpressError.js     # Custom error handling class
│   └── wrapAsync.js        # Utility for handling async errors in Express routes
├── views/
│   ├── error.ejs           # Error page template
│   ├── includes/
│   │   ├── flash.ejs       # Template for flash messages
│   │   ├── footer.ejs      # Footer partial
│   │   └── navbar.ejs      # Navigation bar partial
│   ├── layouts/
│   │   └── boilerplate.ejs # Main layout template
│   ├── listings/
│   │   ├── edit.ejs        # Edit listing form template
│   │   ├── index.ejs       # All listings display template
│   │   ├── new.ejs         # Create new listing form template
│   │   └── show.ejs        # Single listing detail template
│   └── users/
│       ├── login.ejs       # Login form template
│       └── signup.ejs      # Signup form template
├── .gitignore              # Specifies intentionally untracked files to ignore
├── app.js                  # Main Express application file
├── cloudConfig.js          # Configuration for Cloudinary integration
├── middleware.js           # Custom middleware functions (e.g., authentication checks)
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Records the exact dependency tree
├── schema.js               # Joi schema for server-side validation
└── README.md               # This file
```
---------


## Technologies & Tools Used

### Backend & Database:
* **Node.js**: JavaScript runtime environment for server-side logic.
* **Express.js**: Fast, unopinionated, minimalist web framework for Node.js.
* **MongoDB**: Flexible NoSQL database for storing application data.
* **Mongoose**: MongoDB object data modeling (ODM) for Node.js, providing schema-based solutions to model application data.

### Frontend:
* **EJS (Embedded JavaScript templating)**: Templating engine for generating dynamic HTML content on the server.
* **Bootstrap 5**: Popular CSS framework for building responsive, mobile-first designs.
* **Font Awesome**: Widely used icon toolkit for scalable vector icons.

### Authentication & Authorization:
* **Passport.js**: Authentication middleware for Node.js, used here with a local strategy for username/password login.

### Image Storage:
* **Cloudinary**: Cloud-based media management platform for uploading, storing, and delivering images.
* **Multer-storage-cloudinary**: Multer storage engine for Cloudinary.

### Development Utilities & Middleware:
* **Joi**: Powerful schema description language and data validator for JavaScript.
* **Connect-flash**: Middleware for Node.js to store flash messages in the session.
* **Method-override**: Enables the use of PUT and DELETE HTTP methods in forms.
* **Dotenv**: Loads environment variables from a `.env` file into `process.env`.
* **Axios**: Promise-based HTTP client for the browser and Node.js (likely for client-side AJAX requests).

## How It's Made

The Wanderlust application is built following an MVC-like architecture (Model-View-Controller) to ensure modularity and maintainability.

* **Backend Foundation:** The server-side logic is powered by **Node.js** and orchestrated by the **Express.js** web framework.
* **Data Persistence:** **MongoDB** serves as the database, with **Mongoose** providing an elegant ODM layer to interact with the database, defining clear schemas for `Listings`, `Reviews`, and `Users`.
* **User Management:** User registration, login, and session management are robustly handled by **Passport.js**, employing a local authentication strategy.
* **Routing & Logic Separation:** Application routes are neatly organized into dedicated files (`routes/`), which then delegate specific business logic to their respective **controllers** (`controllers/`). This separation enhances code readability and management.
* **Dynamic Views:** **EJS** templates are used for server-side rendering, creating dynamic HTML pages based on data retrieved from the backend. Partial templates (`includes/`) and a `boilerplate` layout ensure consistent UI elements across the application.
* **Styling & Responsiveness:** The user interface is built with **Bootstrap 5**, providing a responsive and modern design, complemented by custom CSS and **Font Awesome** icons.
* **Image Handling:** Property images are securely uploaded and stored on **Cloudinary**, an external cloud service, ensuring efficient media management.
* **Data Validation:** Server-side input validation is enforced using **Joi** schemas, preventing malformed data from entering the database and improving application reliability.
* **Error Handling & Feedback:** Custom error handling (`ExpressError`, `wrapAsync`) ensures graceful degradation. **Connect-flash** provides ephemeral messages to users, confirming actions or informing them of errors.
* **Deployment Ready:** Configuration for environment variables (`dotenv`) and cloud services (`cloudConfig.js`) makes the application ready for deployment.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (LTS recommended)
* MongoDB (Community Server)
* NPM (comes with Node.js)
* Cloudinary Account (for image uploads)





