import styled from "styled-components"
import { movies } from "../util/test_data"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


export default function Home () {
    return (
        <Container>
            <MoviePoster>
                <Carousel
                    showThumbs
                    autoPlay
                    infiiteLoop
                    showStatus={false}
                    transtionTime={3}    
                >
                    {movies.results.map((movie) => (
                        <ul key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                            <li>{movie.title}</li>
                        </ul>
                    ))}
                </Carousel>
            </MoviePoster>
        </Container>
    )
}

const Container = styled.div``
const MoviePoster = styled.div`
    display: flex;
    align-item: center;
`