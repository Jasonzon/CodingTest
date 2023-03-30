import {useParams} from "react-router-dom"
import Container from "@mui/material/Container"
import {useState, useEffect} from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

function Movie() {
    
    const {id} = useParams()

    const [movie, setMovie] = useState({
        Title:"",
        Year:"",
        Released:"",
        Runtime:"",
        Genre:"",
        imdbRating:"",
        Plot:""
    })

    async function getMovie() {
        const res = await fetch(`http://www.omdbapi.com/?apikey=d37dede0&i=${id}`)
        const parseRes = await res.json()
        setMovie(parseRes)
    }

    useEffect(() => {
        getMovie()
    },[])

    return (
        <Container>
            <Typography component="h2">{movie.Title}</Typography>
            <Typography component="h4">{movie.Year}</Typography>
            <Typography component="h4">{movie.Released}</Typography>
            <Typography component="h4">{movie.Runtime}</Typography>
            <Typography component="h4">{movie.Genre}</Typography>
            <Typography component="h4">{movie.Plot}</Typography>
            <Typography component="h4">{movie.imdbRating}</Typography>
        </Container>
    )
}

export default Movie