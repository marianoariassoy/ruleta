import Modal from "./components/Modal";
import Agotado from "./components/Agotado";
import Menu from "./components/Menu";
import { useEffect, useState } from "preact/hooks";
import { premios } from "./data/data";

type Stock = {
  id: number;
  name: string;
  stock: number;
};

export function App() {
  const [stock, setStock] = useState<Stock[]>();
  const [premio, setPremio] = useState<number>(0);
  const [menu, setMenu] = useState<boolean>(false);
  const [agotado, setAgotado] = useState<boolean>(false);

  useEffect(() => {
    setStock([...premios]);
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

    const stockPremio = stock!.find((p) => p.id === odd)!.stock;

    if (stockPremio > 0) {
      const newStock = stock!.filter((p) => p.id === odd && p.stock--);

      console.log(newStock);
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
          <div className="arrow-down"></div>

          <button className="button-run shadow-inset" onClick={run}>
            <img src="./assets/images/logo.svg" />
          </button>

          <div name="roullete" className="roullete">
            <div className="border-top shadow shadow-inset"></div>

            <div className="premios">
              <img src="./assets/images/todos.svg" />
            </div>

            {stock && stock.map((p) => <div className={`fill fill_${p.id}`} key={p.id}></div>)}
            <div className="fill fill_13"></div>

            {stock &&
              stock.map((p) => (
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

      <button onClick={() => setMenu(!menu)} class="open-menu text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#FFF" width="15">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
        </svg>
      </button>

      {premio > 0 && <Modal premio={premio} setPremio={setPremio} stock={stock} />}
      {agotado && <Agotado setAgotado={setAgotado} />}
      {menu && <Menu stock={stock} setStock={setStock} setMenu={setMenu} />}
    </>
  );
}
