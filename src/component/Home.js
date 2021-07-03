import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { SkipNext, SkipPreviousRounded } from '@material-ui/icons';
// import '../images/mta.jpg';
import mta from '../images/mta.jpg';
import google from '../images/google.jpg';
import reactbasic  from  '../images/reactbasic.png';
import courserapython  from  '../images/coursera-python.jpg';
import courserabootstrap from '../images/coursera-bootstrap.jpg';
import rpa from '../images/rpa.jpg';
import cloud from '../images/cloud.jpg';
import problemsolvingbasic from '../images/problemsolvingbasic.png';
import abhigyaan from '../images/abhigyaan.jpg';
import ignium from '../images/ignium.jpg';
import tempdiploma from '../images/tempdiploma.jpg';

let Certificates = [
  {
    id: 1,
    name: mta,
  },
  {
    id: 2,
    name: google,
  },
  {
    id: 3,
    name: reactbasic,
  },
  {
    id: 4,
    name: courserapython,
  },
  {
    id: 5,
    name: rpa,
  },
  {
    id: 6,
    name: courserabootstrap,
  },
  {
    id: 7,
    name: cloud,
  },
  {
    id: 8,
    name: problemsolvingbasic,
  },
  {
    id: 9,
    name: abhigyaan,
  },
  {
    id: 10,
    name: ignium,
  },
  {
    id: 11,
    name: tempdiploma,
  },
];

function Home(props) {
  const [imgName, setImageName] = React.useState("");
  const [id, setId] = React.useState(0);
  let position = Certificates[id];

  const start = () => {
    setId(0);
    setImageName(position.name);
  };
  const prev = () => {
    let temp = id;
    setId(--temp);
    // console.log(id);
    setImageName(position.name);
  };
  const next = () => {
    let temp = id;
    setId(++temp);
    // console.log(id,position.name);
    setImageName(position.name);
  };
  const getData = () => {
    // let temp = id;
    let source = `${position.name}`;
    // let source = require(`../images/mta.jpg`);
    // src={require(`../images/${position.name}`)}
    return (
      <div className="body-certi">
        <Paper elevation={10}>
          <img className="certificate" src={position.name}  alt="certificate" />
        </Paper>
      </div>
    );
  };
  return (
    <div>
      {/* <AppBar >Tanay Bagayatkar</AppBar> */}
      <Button
        onClick={() => {
          prev();
        }}
        disabled={id === 0}
      >
        <SkipPreviousRounded/>
      </Button>
      <Button
        onClick={() => {
          next();
        }}
        disabled={id === Certificates.length - 1}
      >
        <SkipNext/>
      </Button>
      <Button onClick={() => start()} disabled={id===0}>Goto Start</Button>
      {/* <h2>Certificate No. {id + 1}</h2> */}

      {getData()}
    </div>
  );
}

export default Home;
