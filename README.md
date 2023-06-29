MERN MOVIE REVIEWS

Welcome to our Movie Reviews App.  For this app we used MongoDB as our database to store our data, we used Express to create our RESTful routes in the Back-End, React to show our Front-End and NodeJs to install packages.  Once you clone or fork the repo, you must npm i -y in both the Back-End and in the Front-End/mern-movie-reviews to get all the necessesary packages installed.

Our vision was to create an App where you could search up movies and be able to see the reviews that people left for them as well as add one of your own.  This proved to be a bit challenging however, we were able to show on the Front-End the movies we added through postman but unfortunately we were not able to get the reviews to show at all.  We created a form for people to use to add their reviews but since we were not successful in showing the reivews from the back en the form is unfortunately not functional.

We were able to connect both the front and back end together using Axios and Cors, however one of our controllers (the reviews controller) we were not successful in showing on the front end.  In the back-end everything works as it should however.

API:
In the back-end you are able to add movies, edit them, delete them and look up a specific movie. You can also look up a review on it's own or the reviews for a specific movie.  You are also able to add reviews, edit them and delete them. All of this can be done using postman and localhost:5000.  The RESTful methpds we used were: GET, POST, PUT, DELETE.

For the movie posters and descriptions we used IMDb.com, so that credit goes to them.

We are going to use Vercel to deploy what we have.


# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

### Added

- Added some more information on the README.md file (6-29-2023)

### Changed

### Removed

### Fixed
