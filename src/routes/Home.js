import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <h1 className={styles.navBar__Name}>GH's</h1>
        <h5 className={styles.navBar__SubName}>RCA-Movie-App</h5>
      </div>
      {/* 상단 네비게이션 바 */}

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
