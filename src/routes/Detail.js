import { useParams } from "react-router";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      {loading ? (
        <h1>Now Loading..</h1>
      ) : (
        <div>
          <img src={movieInfo.large_cover_image} alt={""} />
          <h3>{movieInfo.description_intro}</h3>
          <button>
            <Link to={`/`}>Home</Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Detail;
