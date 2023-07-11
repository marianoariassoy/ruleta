import Modal from "./components/Modal";
import Agotado from "./components/Agotado";
import { useEffect, useState } from "preact/hooks";
import { premios } from "./data/data";

export function App() {
  const [premio, setPremio] = useState(0);
  const [agotado, setAgotado] = useState(false);
  const [stock] = useState(premios);

  useEffect(() => {
    stock.forEach((p) => {
      if (p.stock === 0) {
        const fill = document.querySelector(`.fill_${p.id}`) as HTMLElement;
        const content = document.querySelector(`.content_${p.id}`) as HTMLElement;
        fill!.classList.add("agotado");
        content!.classList.remove("hide");
      }
    });
  }, []);

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

            {stock.map((p) => (
              <div className={`fill fill_${p.id}`} key={p.id}></div>
            ))}
            <div className="fill fill_13"></div>

            {stock.map((p) => (
              <div className={`content content_${p.id} hide`} key={p.id}>
                <img src="./assets/images/sould-out.svg" />
              </div>
            ))}
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
