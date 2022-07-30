import { useEffect, useState } from "react";
import { GenreResponseProps, MovieProps } from "../App";
import { api } from "../services/api";
import { Button } from "./Button";

interface genresProps {
  genres: GenreResponseProps[],
  setMovies(m:MovieProps[]): void,
  setSelectedGenre(g: GenreResponseProps): void
}

export function SideBar({ genres,setMovies,setSelectedGenre }: genresProps) {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}