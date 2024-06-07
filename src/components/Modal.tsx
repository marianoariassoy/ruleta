import Lottie from "lottie-react";
import face from "../json/wired-outline-261-emoji-smile.json";
import ConfettiExplosion from "react-confetti-explosion";

type Stock = {
  id: number;
  name: string;
  stock: number;
};

type Props = {
  premio: number;
  setPremio: (premio: number) => void;
  stock: Array<Stock> | undefined;
};

const Modal = ({ premio, setPremio, stock }: Props) => {
  const style = {
    width: 50,
  };

  const { name } = stock!.find((p) => p.id === premio)!;

  function hideModal() {
    const roullete = document.querySelector('div[name="roullete"]');
    roullete!.classList.remove("loop");
    setPremio(0);

    stock!.forEach((p) => {
      if (p.stock === 0) {
        const fill = document.querySelector(`.fill_${p.id}`) as HTMLElement;
        const content = document.querySelector(
          `.content_${p.id}`
        ) as HTMLElement;
        fill!.classList.add("agotado");
        content!.classList.remove("hide");
      }
    });
  }

  return (
    <div className="modal-container fade-in" onClick={hideModal}>
      <div className="modal">
        <div className="face-win">
          <Lottie animationData={face} style={style} />
          <ConfettiExplosion />
        </div>
        <span class="text-xl block">
          ¡Felicitaciones ganaste un premio de {name}!
        </span>
        <span class="text-sm block">Gracias por jugar con Alto Noa</span>
      </div>
    </div>
  );
};

export default Modal;
