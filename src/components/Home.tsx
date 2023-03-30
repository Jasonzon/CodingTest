import Container from "@mui/material/Container"
import {useState} from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom"

interface Movie {
    Title: string,
    Year: string,
    imdbID: string,
    Type: string,
    Poster: string
}

function Home() {

    const navigate = useNavigate()

    const [movies, setMovies] = useState<Movie[]>([])

    const [search, setSearch] = useState<string>("")

    async function getMovies(title: string) {
      const res = await fetch(`http://www.omdbapi.com/?apikey=d37dede0&s=${title}`)
      const parseRes = await res.json()
      setMovies(parseRes.Search)
    }

    return (
        <Container>
            <Box>  
                <TextField value={search} onChange={(e) => setSearch(e.target.value)} />
                <Button variant="contained" onClick={() => getMovies(search)}>Contained</Button>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {movies.map(({Title,Year,imdbID,Type,Poster}:{Title:string,Year:string,imdbID:string,Type:string,Poster:string}) => (
                    <Grid item key={Title} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            sx={{
                            // 16:9
                            pt: '56.25%',
                            }}
                            image={Poster}
                            alt="random"
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">{Title}</Typography>
                            <Typography>{Year}</Typography>
                            <Typography>{Type}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => navigate(`/movie/${imdbID}`)}>View</Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    )
}

export default Home