import Modal from "./components/Modal";
import { useState } from "preact/hooks";

export function App() {
  const [gano, setGano] = useState(0);

  function buildOdds() {
    return [
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8,
      9, 9, 9, 9, 9, 10, 10, 10, 11, 11, 12,
    ];
  }

  function getRandomOdd() {
    const array = buildOdds();
    const index = Math.floor(Math.random() * array.length);
    const odd = array[index];
    return odd > 6 ? odd - 6 : odd;
  }

  var sound = new Audio("./assets/sounds/sound.mp3");
  var sound_end = new Audio("./assets/sounds/end.mp3");
  var sound_claping = new Audio("./assets/sounds/claping.mp3");

  function run() {
    sound.play();

    const roullete = document.querySelector('div[name="roullete"]');
    roullete!.classList.remove("loop");

    const odd = getRandomOdd();
    // console.log(odd);

    // premios.filter((p) => p.id == odd && p.count--);

    setTimeout(() => {
      document.documentElement.style.setProperty("--laps", odd.toString());
      roullete!.classList.add("loop");
    }, 188);
    setTimeout(() => {
      setGano(odd);
      sound_end.play();
      sound_claping.play();
      const modal = document.querySelector(".modal-container");
      modal?.classList.remove("hide");
    }, 8000);
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

            <div className="content content_1"> </div>
            <div className="content content_2"> </div>
            <div className="content content_3"> </div>
            <div className="content content_4"> </div>
            <div className="content content_5"> </div>
            <div className="content content_6"> </div>
            <div className="content content_7"> </div>
            <div className="content content_8"> </div>
            <div className="content content_9"> </div>
            <div className="content content_10"> </div>
            <div className="content content_11"> </div>
            <div className="content content_12"> </div>
          </div>
        </div>

        <footer>
          El Shopping de Salta
          <hr />
        </footer>
      </main>

      <Modal premio={gano} />
    </>
  );
}
