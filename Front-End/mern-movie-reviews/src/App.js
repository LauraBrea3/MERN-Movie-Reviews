import "./App.css";
import { useState, useEffect } from "react";
import Review from "./components/Review";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import axios from "axios";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get("/movies");
    setMovies(data);
  };

  console.log(movies);

  useEffect(() => {
    fetchMovies();
  }, []);

  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const { data } = await axios.get("/reviews");
    setReviews(data);
  };

  console.log(reviews);

  useEffect(() => {
    fetchReviews();
  }, []);

  const [movie, setMovie] = useState("");
  const [yourName, setYourName] = useState("");
  const [stars, setStars] = useState("");
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://localhost:5000/reviews", {
        method: "POST",
        body: JSON.stringify({
          movie: movie,
          yourName: yourName,
          stars: stars,
          review: review,
        }),
      });
      
      if (res.status === 200) {
        setMovie("");
        setYourName("");
        setStars("");
        setReview("");
        setMessage("Review Added Successfully");
      } else {
        setMessage("An error has occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="d-flex flex-wrap justify-content-center">
          {movies.map((movies) => (
            <MovieList key={movies.id} movie={movies} />
          ))}
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <div className="reviews">
            <form className="textFields" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="formTitle">Add a Movie Review</label>
                <br />
                <label className="formLabel" htmlFor="movie">
                  Movie Title
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={movie}
                  placeholder="Movie Title"
                  onChange={(e) => setMovie(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label className="formLabel" htmlFor="yourName">
                  Your Name
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={yourName}
                  placeholder="Your Name"
                  onChange={(e) => setYourName(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label className="formLabel" htmlFor="stars">
                  Stars
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={stars}
                  placeholder="How many Stars do you rate it?"
                  onChange={(e) => setStars(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group">
                <label className="formLabel" htmlFor="review">
                  Review
                </label>
                <input
                  className="form-control"
                  type="text"
                  value={review}
                  maxLength="1000"
                  placeholder="Write your review here"
                  onChange={(e) => setReview(e.target.value)}
                />
              </div>

              <br />

              <button className="btn btn-primary" type="submit">
                Submit Review
              </button>

              <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
