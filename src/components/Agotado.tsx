import Lottie from "lottie-react";
import face from "../json/wired-outline-262-emoji-wow.json";

type AgotadoProps = {
  setAgotado: (agotado: boolean) => void;
};

const Agotado = ({ setAgotado }: AgotadoProps) => {
  const style = {
    width: 50,
  };

  function hideModal() {
    const roullete = document.querySelector('div[name="roullete"]');
    roullete!.classList.remove("loop");
    setAgotado(false);
  }

  return (
    <div className="modal-container  fade-in" onClick={hideModal}>
      <div className="modal  agotado">
        <div className="face-win">
          <Lottie animationData={face} style={style} />
        </div>
        <span class="text-xl block">¡Seguí participando!</span>
        <span class="block">Gracias por jugar con Alto Noa</span>
      </div>
    </div>
  );
};

export default Agotado;
