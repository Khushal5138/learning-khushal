

const User = require('./models/user');
const Rating = require('./models/rating');
const Category = require('./models/category');
const Customer = require('./models/customer');
const Admin = require('./models/admin');
const Services = require('./models/services');
const ServiceProvider = require('./models/serviceProvider');
const booking = require('./models/booking');
const otp = require('./models/otp');
const filesUpload = require('./models/filesUpload');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const expressSession = require('express-session');
const cors = require('cors');

const dbUrl = process.env.DB_URL;
mongoose.connect("mongodb://localhost/test",{})
    .then(()=>{
        console.log('MongoDB is available.');
    })
    .catch(err=>{
        console.log(err);
        process.exit(0);
    })

const sessionOption = {
    secret : "Secret",
    resave : false,
    saveUninitialized: false
}

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(expressSession(sessionOption));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// Routers  
const ratingRoutes = require("./routes/rating");
const cateoryRoutes = require("./routes/category");
const customerRoutes = require("./routes/customer");
const adminRoutes = require("./routes/admin");
const servicesRoutes = require("./routes/services");
const serviceProviderRoutes = require("./routes/serviceProvider");
const bookingRoutes = require("./routes/booking");
const otpRoutes = require("./routes/otp");
const filesUploadRoutes = require("./routes/filesUpload");

app.use('/ratings' , ratingRoutes);
app.use('/categories' , cateoryRoutes);
app.use('/customer' , customerRoutes);
app.use('/admin' , adminRoutes);
app.use('/services' , servicesRoutes);
app.use('/serviceProvider' , serviceProviderRoutes);
app.use('/booking' , bookingRoutes);
app.use('/otp' , otpRoutes);
app.use('/filesUpload' , filesUploadRoutes);

app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});

module.exports = app;




