import '../style/App.css'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Home"
import Movie from "./Movie"
import AppBar from "@mui/material/AppBar"
import Typography from "@mui/material/Typography"
import Toolbar from "@mui/material/Toolbar"

function App() {

  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Open Movie
          </Typography>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}

export default App;
