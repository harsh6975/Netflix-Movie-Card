import "./styles.css";
import Cards from "./Card";
import Video from "./Video";

export default function App() {
  return (
    <div className="App">
      <Cards />
      <section id="video">
      <Video />
      </section>
      
    </div>
  );
}
