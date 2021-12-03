import "./TvShow.css";
import { useParams, Link } from "react-router-dom";
import tvShowsArray from "../../api/tvShows";
import React, { useEffect, useState } from "react";

export default function TvShow() {
  const { tvShowId } = useParams();
  const [tvShowObject, setTvShowObject] = useState({});
  const [tvShowSeason, setTvShowSeason] = useState({});

  useEffect(() => {
    const getTvShow = tvShowsArray.find((el) => el.id === tvShowId);
    setTvShowObject(getTvShow);
    setTvShowSeason(getTvShow.season[0]);
  }, [tvShowId]);
  return (
    <div>
      <h1>{tvShowObject?.title}</h1>
      <div className="tvShow">
        <div className="seasons">
          {tvShowObject?.season?.map((el) => (
            <div
              key={el.id}
              className="one_season"
              onClick={() => setTvShowSeason(el)}
            >
              {el.title}
            </div>
          ))}
        </div>
        <div className="episodes">
          {tvShowSeason?.episode?.map((el) => (
            <div key={el.id} className="one_episode">
              <Link
                to={`/tv-show-episode/${tvShowObject.id}/${tvShowSeason.id}/${el.id}`}
              >
                <img
                  src={el.image}
                  alt=""
                  width={200}
                  className="episodeImage"
                />
              </Link>

              <span>{el.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//step 1. extract the page id with useParams()
// in this case the param is PageId (key of the params object)

// step 2. store the tv show object from the api data in the state
