import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Grid from "@material-ui/core/Grid";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* columns={{ xs: 12, sm: 8, md: 12 }} */}
      <Grid container >
        {/* <Grid item xs={12} md={4} >
        <Home />
        </Grid> */}
        <Grid item xs={12} md={12} >
        <Home />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
