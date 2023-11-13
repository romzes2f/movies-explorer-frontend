import "../Movies/Movies.css";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";


function SavedMovies({ savedMoviesList, onDeleteClick }) {
    return (
        <main className="movies">
            <SearchForm />
            <MoviesCardList cards={savedMoviesList} onDeleteClick={onDeleteClick} />
        </main>
    );
}

export default SavedMovies;