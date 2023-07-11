import Modal from "./components/Modal";
import Agotado from "./components/Agotado";
import { useState } from "preact/hooks";
import { premios } from "./data/data";

export function App() {
  const [premio, setPremio] = useState(0);
  const [agotado, setAgotado] = useState(false);
  const [stock] = useState(premios);

  function buildOdds() {
    return [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8,
      9, 9, 9, 9, 9, 10, 10, 10, 11, 11, 12,
    ];
  }

  function getRandomOdd() {
    const array = buildOdds();
    const index = Math.floor(Math.random() * array.length);
    return array[index];
  }

  const start = new Audio("./assets/sounds/start.mp3");
  const end = new Audio("./assets/sounds/end.mp3");
  const claping = new Audio("./assets/sounds/claping.mp3");
  const loose = new Audio("./assets/sounds/loose.mp3");

  function run() {
    start.play();
    const roullete = document.querySelector('div[name="roullete"]');
    roullete!.classList.remove("loop");

    const odd = getRandomOdd();
    console.log("ID Premio: " + odd);

    setTimeout(() => {
      document.documentElement.style.setProperty("--laps", odd.toString());
      roullete!.classList.add("loop");
    }, 188);

    const stockPremio = stock.find((p) => p.id === odd)!.stock;

    if (stockPremio > 0) {
      stock.filter((p) => p.id === odd && p.stock--);
      setTimeout(() => {
        setPremio(odd);
        end.play();
        claping.play();
      }, 8500);
    } else {
      setTimeout(() => {
        setAgotado(true);
        loose.play();
      }, 8500);
    }
  }

  return (
    <>
      <main>
        <img src="./assets/images/title.svg" width="150" />

        <div className="container-roullete">
          <button className="button-run  shadow-inset" onClick={run}>
            <img src="./assets/images/logo.svg" />
          </button>

          <div className="arrow-down ">
            <img src="./assets/images/down.svg" />
          </div>

          <div name="roullete" className="roullete">
            <div className="border-top shadow shadow-inset"></div>

            <div className="premios">
              <img src="./assets/images/todos.svg" />
            </div>

            <div className="fill fill_1"></div>
            <div className="fill fill_2"></div>
            <div className="fill fill_3"></div>
            <div className="fill fill_4"></div>
            <div className="fill fill_5"></div>
            <div className="fill fill_6"></div>
            <div className="fill fill_7"></div>
            <div className="fill fill_8"></div>
            <div className="fill fill_9"></div>
            <div className="fill fill_10"></div>
            <div className="fill fill_11"></div>
            <div className="fill fill_12"></div>
            <div className="fill fill_13"></div>

            <div className="content content_1">
              <span></span>
            </div>
            <div className="content content_2">
              <span></span>
            </div>
            <div className="content content_3">
              <span></span>
            </div>
            <div className="content content_4">
              <span></span>
            </div>
            <div className="content content_5">
              <span></span>
            </div>
            <div className="content content_6">
              <span></span>
            </div>
            <div className="content content_7">
              <span></span>
            </div>
            <div className="content content_8">
              <span></span>
            </div>
            <div className="content content_9">
              <span></span>
            </div>
            <div className="content content_10">
              <span></span>
            </div>
            <div className="content content_11">
              <span></span>
            </div>
            <div className="content content_12">
              <span></span>
            </div>
          </div>
        </div>

        <footer>
          El Shopping de Salta
          <hr />
        </footer>
      </main>

      {premio > 0 && <Modal premio={premio} setPremio={setPremio} stock={stock} />}
      {agotado && <Agotado setAgotado={setAgotado} />}
    </>
  );
}
