import React from "react";

let Certificates = [
  {
    id: 1,
    name: "mta.jpg",
  },
  {
    id: 2,
    name: "google.jpg",
  },
  {
    id: 3,
    name: "reactbasic.png",
  },
  {
    id: 4,
    name: "coursera-python.jpg",
  },
  {
    id: 5,
    name: "rpa.jpg",
  },
  {
    id: 6,
    name: "coursera-bootstrap.jpg",
  },
  {
    id: 7,
    name: "cloud.jpg",
  },
  {
    id: 8,
    name: "problemsolvingbasic.png",
  },
  {
    id: 9,
    name: "abhigyaan.jpg",
  },
  {
    id: 10,
    name: "ignium.jpg",
  },
  {
    id: 11,
    name: "tempdiploma.jpg",
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
    console.log(id);
    setImageName(position.name);
  };
  const next = () => {
    let temp = id;
    setId(++temp);
    console.log(id);
    setImageName(position.name);
  };
  const getData = () => {
    // let temp = id;
    let source = `/images/${position.name}`;
    return <img className="certificate" src={source} alt="certificate" />;
  };
  return (
    <div>
      <button
        onClick={() => {
          prev();
        }}
        disabled={id === 0}
      >
        Prev
      </button>
      <button
        onClick={() => {
          next();
        }}
        disabled={id === Certificates.length - 1}
      >
        Next
      </button>
      <button onClick={() => start()}>Goto Start</button>
      <h2>Certificate No. {id + 1}</h2>

      {getData()}
    </div>
  );
}

export default Home;
