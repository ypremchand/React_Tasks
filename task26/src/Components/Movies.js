import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://freetestapi.com/api/v1/movies")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleTitleClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  const postList = posts.length ? (
    <div className="row">
      {posts.map((post) => (
        <div className="col-md-4 mb-4" key={post.id}>
          <Card>
            <Card.Body>
              <Card.Title
                style={{ cursor: 'pointer', color: 'blue' }}
                onClick={() => handleTitleClick(post)}
              >
                {post.title}
              </Card.Title>
              <Card.Text>{post.genre}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  ) : (
    <p>No post yet!</p>
  );

  return (
    <div className="container mt-4">
      {postList}

      {selectedMovie && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedMovie.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedMovie.poster} alt={selectedMovie.title} className="img-fluid" />
            <h3>ID: {selectedMovie.id}</h3>
            <h3>Genre: {selectedMovie.genre}</h3>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Home