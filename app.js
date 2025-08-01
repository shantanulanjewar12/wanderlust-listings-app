if (process.env.NODE_ENV != "production") {
    require('dotenv').config()
}



const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require("../Wanderlust Major Project/models/listing");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const { log } = require('console');



const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log(err);
    })

async function main() {
    mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));



// Sessions
const sessionOptions = {
    secret: "mysecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};


// app.get("/", (req, res) => {
//     res.send("Hi,I am root.")
// });


app.use(session(sessionOptions));
app.use(flash());


//npm Passport
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentUser = req.user;
    next();
});


// Demo for Signup
// app.get("/demouser",async(req,res)=>{
//     let fakeUser=new User(
//         {
//             email:"student@gmail.com",
//             username:"delta-student",
//         }
//     );

//     let registeredUser= await User.register(fakeUser,"helloworld")
//     res.send(registeredUser);

// })



//All Listings
app.use("/listings", listingRouter);
// Reviews-------------
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);








app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page not found!!"));
});


app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong" } = err;
    res.status(statusCode).render("error.ejs", { err });

    //res.status(statusCode).send(message);
});



app.listen(5000, () => {
    console.log("Server is listening to 5000");
})