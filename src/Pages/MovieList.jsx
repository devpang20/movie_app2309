import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { config } from "../../constant";
import Card from "../Components/Card";

export default function MoiveList () {
    const [movies, setMovies] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${params.type ? params.type : "popular" }?language=ko-KR&api_key=` + config.API_KEY
        )
            .then((res) => res.json())
            .then((data) => {
            //console.log(data)
            setMovies(data.results)
        })
     }, [params.type])
    
    return (
        <Container>
            <h3>검색🔍</h3>
            <Title></Title>
            <Group>
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie}></Card>
                ))}
            </Group>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 3rem 3rem 3rem;
`

const Title = styled.h2`
    font-zise: 1.75rem;
    margin: 2.5rem;
`

const Group = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 100%
    justify-content: center;
`