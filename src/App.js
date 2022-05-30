import { Container, Row, Col } from 'react-bootstrap'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Component } from 'react'
import MovieDetails from './components/MovieDetails'
import MovieDropdown from './components/MovieDropdown'

class App extends Component {
  state = {
    movieTitle: 'Iron Man',
  }

  handleMovieTitle = (newMovieTitle) => {
    this.setState({
      movieTitle: newMovieTitle,
    })
  }

  render() {
    // this fires again when I'm changing movieTitle from MovieDropdown!
    return (
      <div className="App">
        <Container className="mt-2 text-light">
          <h1>Movie Chooser App!</h1>
          <Row className="justify-content-center">
            <Col xs={12} md={6}>
              <MovieDropdown
                movieTitle={this.state.movieTitle} // read access
                handleMovieTitle={this.handleMovieTitle} // write access
              />
            </Col>
          </Row>
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={6}>
              <MovieDetails movieTitle={this.state.movieTitle} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
