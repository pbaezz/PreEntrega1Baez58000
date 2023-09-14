import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemsListContainer/ItemsListContainer";
import ProfileCards from "./components/ProfileCards";
import cdj from "./components/img/pioneer-dj-cdj-3000.jpg";
import hdj from "./components/img/pioneer-hdj-x5-k-hdj-x5-k.jpg";
import plx from "./components/img/pioneer-plx-500.jpg";
import "bulma/css/bulma.css";

function App() {

  return (
    <div>
      <div className="App">
        <NavBar/>  
        <ItemListContainer greeting={"Welcome to the Dj´s World"}/>
      </div>

      <div>
        <section className="hero is-primary">
          <div >
            <h1 className="title">Mas Vendidos</h1>
          </div>
        </section>

        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-4">
                <ProfileCards img={cdj} titulo="Cdjs" descr="PIONEER CDJ-3000" precio="usd 3000,00"/>
              </div>

              <div className="column is-4">
                <ProfileCards img={hdj} titulo="Auriculares" descr="PIONEER XDJ X5" precio="usd 1500,00"/>
              </div>

              <div className="column is-4">
                <ProfileCards img={plx} titulo="Bandeja" descr="PIONEER PLX 500" precio="usd 4000,00"/>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
