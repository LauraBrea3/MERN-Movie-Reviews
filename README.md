# MERN-Movie-Reviews TEMP README!
MERN Milestone project #2

Movie Review APP

◦	Need At least 20 commits
◦	create 2 separate apps
◦	Back-End - Express
◦	Front-End – React/Redux
◦	Create a clear ReadMe
◦	Use MongoDB as database
◦	Create seeder files for testing purposes
◦	Decide who will work on which parts

App Functionality

◦	Movie component
◦	shows titles and can be filtered by genre
◦	shows who are the main actors
◦	shows who directed it
◦	comments section
◦	shows current rating
◦	Needs CRUD functionality
◦	create a form to add/remove/edit movies


Models, Views, Controllers

Models:
•	Movies
    Title
	  Genre
	  Year
	  Length
	  Plot (We can either get this online or use Lorem Ipsum)
	  Comments that have already been added
•	Comments
	  Author of who is writing the comment
	  Like/Dislike( like a thumbs up or thumbs down)
	  How many stars ,from 1-5
	  Content of the review

Views/Components:
•	Home
	  Basic homepage with NavBar, we can also add a button to take people to the page with all the movies and another one for the page to add comments
•	Movie show page
    Will show all the info of that movie as well as comments that have already been added:
	    Title
      Genre
	    Year
	    Length
	    Plot (We can either get this online or use Lorem Ipsum)
	    Comments that have already been added
•	Error page
	  404 error page
•	Edit page
	  Link on the NavBar to edit the movies & reviews
•	Add new movie page
    We can add a link on the navbar to take you to where you can add movies, using the form we create:
	  Title
	  Genre
	  Year
	  Length
	  Plot (We can either get this online or use Lorem Ipsum)

Controller:
•	Movies.js (this is where we do the back-end and create the CRUD routes)

