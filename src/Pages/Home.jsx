import styled from "styled-components"
import { movies } from "../util/test_data"

export default function Home () {
    return (
        <Container>
            <MoviePoster>
                {movies.results.map((movie) => (
                    <ul key={movie.id}>
                        <li>{movie.title}</li>
                    </ul>
                ))}
            </MoviePoster>
        </Container>
    )
}

const Container = styled.div``
const MoviePoster = styled.div`
    display: flex;
    align-item: center;
`