import Layout from "../components/MyLayout.js";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const MovieDetails = () => {
  // Get the query parameters from the router object
  const router = useRouter();
  //Extracts the `id` and `title` query parameters from the URL, which were passed as props
  const { id, title } = router.query;
  // Initialize state for the film data
  const [film, setFilm] = useState({});

  // Fetch the film data from the API when the component mounts or the ID changes
  useEffect(() => {
    const fetchFilm = async () => {
      const res = await fetch(`https://swapi.dev/api/films/${id}/`);
      const data = await res.json();
      setFilm(data);
    };

    fetchFilm();
  }, [id]);

  // Render the movie details page
  return (
    <Layout>
      <h1>{title}</h1>
      <p>Director: {film.director}</p>
      <p>Release date: {film.release_date}</p>
      <p>Opening crawl: {film.opening_crawl}</p>
    </Layout>
  );
};

export default MovieDetails;
