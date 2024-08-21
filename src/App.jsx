import "./App.css";
import data from "./assets/data.json";
import TvShow from "./components/TvShow";
import M6logo from "./assets/b2cc785831d270861dc696646b1a9d38.png";

function App() {
  return (
    <>
      <header>
        <img src={M6logo} alt="M6logo" />
      </header>
      {data.map((elem, index) => (
        <TvShow
          key={index}
          time={elem.time}
          title={elem.title}
          type={elem.type}
          duration={elem.duration}
          image={elem.image}
          direct={elem.direct}
        />
      ))}
    </>
  );
}

export default App;
