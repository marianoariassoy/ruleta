import { useEffect } from "preact/hooks";
import { premios } from "../data/data";
import { useState } from "preact/hooks";

type ModalProps = {
  premio: number;
};

const Modal = ({ premio }: ModalProps) => {
  const [gano, setGano] = useState(0);

  useEffect(() => {
    setGano(premio);
  }, [premio]);

  console.log(premio);

  function hideModal() {
    const modal = document.querySelector(".modal-container");
    modal?.classList.add("hide");

    const roullete = document.querySelector('div[name="roullete"]');
    roullete!.classList.remove("loop");
  }

  return (
    <div className="modal-container fade-in hide" onClick={hideModal}>
      <div className="modal shadow">
        <div className="face-win">
          <img src="./assets/images/face-win.svg" width="50" />
        </div>
        ¡Felicitaciones ganaste un premio de {premios[gano].name}!
      </div>
    </div>
  );
};

export default Modal;
