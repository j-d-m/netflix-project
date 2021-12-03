import React, { useEffect, useState } from "react";
import "./TvShowEpisode.css";
import { useParams } from "react-router-dom";
import TvShowsData from "../../api/tvShows";
import tvShows from "../../api/tvShows";

export default function TvShowEpisode() {
  const { tvShowId, seasonId, episodeId } = useParams();

  const [tvShow, setTvShow] = useState();
  const [season, setSeason] = useState();
  const [episode, setEpisode] = useState();

  useEffect(() => {
    const getTvShow = TvShowsData.find((el) => el.id === tvShowId);
    setTvShow(getTvShow);

    const getSeason = getTvShow.season.find((el) => el.id === seasonId);
    setSeason(getSeason);

    const getEpisode = getSeason.episode.find((el) => el.id === episodeId);
    setEpisode(getEpisode);
  }, [tvShowId, seasonId, episodeId]);

  return (
    <div
      className="TvShowEpisode"
      style={{ backgroundImage: `url(${tvShow.image})` }}
    ></div>
  );
}
