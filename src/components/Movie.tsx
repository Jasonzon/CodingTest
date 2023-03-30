import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import { Container, Typography, Rating, Box, CircularProgress } from "@mui/material";

interface MovieDetail {
    Title: string,
    Year: string,
    Released: string,
    Runtime: string,
    Genre: string,
    imdbRating: string,
    Plot: string
}

function Movie() {
    
    const {id} = useParams()

    const [movie, setMovie] = useState<MovieDetail>({
        Title:"",
        Year:"",
        Released:"",
        Runtime:"",
        Genre:"",
        imdbRating:"",
        Plot:""
    })


    const [show, setShow] = useState<boolean>(false)

    async function getMovie() {
        const res = await fetch(`http://www.omdbapi.com/?apikey=d37dede0&i=${id}`)
        const parseRes = await res.json()
        setShow(true)
        setMovie(parseRes)
    }

    useEffect(() => {
        getMovie()
    },[])

    return (
        <Container> {!show ? <Container sx={{display: 'flex',justifyContent: 'center',alignItems: 'center',height: '100vh'}}><CircularProgress/></Container> : 
        <Container maxWidth="md" style={{marginTop:"1rem"}}>
            <Typography variant="h4" style={{textAlign:"center"}}>{movie.Title}</Typography>
            <Box display="flex" alignItems="center">
                <Typography>📅</Typography>
                <Typography variant="subtitle1">{movie.Year}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Typography>⏰</Typography>
                <Typography variant="subtitle1">{movie.Runtime}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Typography>🎬</Typography>
                <Typography variant="subtitle1">{movie.Genre}</Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <Typography>📈</Typography>
                <Rating name="imdb-rating" value={Number(movie.imdbRating) / 2} precision={0.1} readOnly />
            </Box>
            <Typography variant="body1">{movie.Plot}</Typography>
        </Container> } </Container>
    )
}

export default Movie