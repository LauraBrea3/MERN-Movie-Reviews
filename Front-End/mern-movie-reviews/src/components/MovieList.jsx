import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";

function MovieList({ movie }) {
  return (
    <Card className="movieCard" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.poster} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle
          style={{ borderBottom: "1px solid black", padding: "2px" }}
        >
          {movie.year}
        </Card.Subtitle>
        <Card.Subtitle style={{ padding: "10px" }}>{movie.genre}</Card.Subtitle>
        <Card.Text>
          <div>{movie.description}</div>
          <div>Rated: {movie.rating}</div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieList;

// import Button from 'react-bootstrap/Button';
//   import Card from 'react-bootstrap/Card';
//   import { useEffect, useState } from 'react';
//   import axios from 'axios';

//   function MovieList({ movie }) {
//     const [comments, setComments] = useState([]);
//     const [comment, setComment] = useState("");

//     useEffect(() => {
//       axios.get(`/reviews/${movie.id}`).then((res) => {
//         setComments(res.data);
//       });
//     }, [movie.id]);

//     const handleSubmit = (e) => {
//       e.preventDefault();
//       axios
//         .post(`/reviews/${movie.id}, { comment }`)
//         .then((res) => {
//           setComments([...comments, res.data]);
//           setComment("");
//         });
//     };

//     return (
//       <Card style={{ width: '18rem' }}>
//         <Card.Img variant="top" src={movie.poster} />
//         <Card.Body>
//           <Card.Title>{movie.title}</Card.Title>
//           <Card.Subtitle style={{ borderBottom: "1px solid black", padding: "2px" }}>{movie.year}</Card.Subtitle>
//           <Card.Subtitle style={{ padding: "10px" }}>{movie.genre}</Card.Subtitle>
//           <Card.Text>
//             <div>
//               {movie.review}
//             </div>
//             <div>
//               Rated: {movie.rating}
// </div>
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">{movie.title}</h5>
//                 <p className="card-text">{movie.description}</p>
//                 <p className="card-text">Directed by {movie.director}</p>
//                 <hr />
//                 <form onSubmit={handleSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="comment">Comment</label>
//                     <textarea
//                       className="form-control"
//                       id="comment"
//                       rows="3"
//                       value={comment}
//                       onChange={(e) => setComment(e.target.value)}
//                     ></textarea>
//                   </div>
//                   <button type="submit" className="btn btn-primary">
//                     Submit
//                   </button>
//                 </form>
//                 <hr />
//                 <h6>Comments:</h6>
//                 {comments.map((comment) => (
//                   <p key={comment.id}>{comment.text}</p>
//                 ))}
//               </div>
//             </div>
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     );
//   }

//   export default MovieList;
