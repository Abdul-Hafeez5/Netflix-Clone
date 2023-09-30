import React, { useEffect, useState } from "react";
import "./Home.scss";
import Row from "./Row";
import axios from "axios";
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"

const Api_key = "c7f9c098ad7baa20b53430ceaf490f8a";
const url = "https://api.themoviedb.org/3";
const imageUrl = "https://image.tmdb.org/t/p/original";
const popularMovie = "/movie/popular?";
const upcomingMovie = `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}`;
const tvShowsMovies = `https://api.themoviedb.org/3/discover/tv?api_key=${Api_key}`;
const nowPlayingMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=${Api_key}`;
// const genrenames = `https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_key}`;

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await axios.get(
        `${url}${popularMovie}api_key=${Api_key}&page=3`
      );
      const movieData = response.data.results;
      setPopularMovies(movieData);
    };
    const fetchUpcomingMovies = async () => {
      const response = await axios.get(upcomingMovie);
      const movieData = response.data.results;
      setUpcomingMovies(movieData);
    };
    const fetchTvShows = async () => {
      const response = await axios.get(tvShowsMovies);
      const movieData = response.data.results;
      setTvShows(movieData);
    };
    const fetchNowPlaying = async () => {
      const response = await axios.get(`${nowPlayingMovies}&page=2`);
      const movieData = response.data.results;
      setNowPlaying(movieData);
    };

    fetchPopularMovies();
    fetchUpcomingMovies();
    fetchTvShows();
    fetchNowPlaying();
  }, []);
  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: upcomingMovies[0]
            ? `url(${`${imageUrl}/${upcomingMovies[0].poster_path}`})`
            : "rgb(16,16,16)",
        }}
      >
        <h1>Retribution</h1>
        <p>When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks. With his kids trapped in the back seat and a bomb that will explode if they get out of the car, a normal commute becomes a twisted game of life or death as Matt follows the stranger's increasingly dangerous instructions in a race against time to save his family.</p>
        <div>
        <button> <BiPlay/> Play </button>
        <button> <AiOutlinePlus/> My List </button>
        </div>
      </div>
      <Row title={"Popular on Netflix"} movieArray={popularMovies} />
      <Row title={"Upcomig Movies"} movieArray={upcomingMovies} />
      <Row title={"TV Shows"} movieArray={tvShows} />
      <Row title={"Recently Viewed"} movieArray={nowPlaying} />
    </section>
  );
};

export default Home;
