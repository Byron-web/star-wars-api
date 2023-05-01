import Layout from "../components/MyLayout";
import Link from "next/link";
import { useState, useEffect } from "react";

// A component that represents a link to a movie detail page. It takes an id and a title as props
const PostLink = ({ id, title }) => (
  <li>
    {/* The query string includes the id and title parameters */}
    <Link as={`/f/${id}`} href={`/movie-details?id=${id}&title=${title}`}>
      <p>{title}</p>
    </Link>
  </li>
);

export default function Films() {
  const [films, setFilms] = useState([]);

  // A useEffect hook that fetches the list of movies from the Star Wars API when the component is mounted
  useEffect(() => {
    const fetchFilms = async () => {
      const res = await fetch("https://swapi.dev/api/films/");
      const data = await res.json();
      setFilms(data.results);
    };

    fetchFilms();
  }, []);

  return (
    <Layout>
      <h1>Star Wars Films</h1>
      <ul>
        {/* Map over the list of films and render a PostLink component for each film */}
        {films.map((film, index) => (
          <PostLink key={index} id={film.episode_id} title={film.title} />
        ))}
      </ul>
    </Layout>
  );
}
