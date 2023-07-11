import Lottie from "lottie-react";
import face from "./wired-outline-261-emoji-smile.json";

type ModalProps = {
  premio: number;
  setPremio: (premio: number) => void;
  stock: Array<any>;
};

const Modal = ({ premio, setPremio, stock }: ModalProps) => {
  const style = {
    width: 50,
  };

  const { name, stock: remainingStock } = stock.find((p) => p.id === premio)!;

  function hideModal() {
    const roullete = document.querySelector('div[name="roullete"]');
    roullete!.classList.remove("loop");
    setPremio(0);

    //reviso stocks
    stock.forEach((p) => {
      if (p.stock === 0) {
        const fill = document.querySelector(`.fill_${p.id}`) as HTMLElement;
        fill!.style.zIndex = "30";
      }
    });
  }

  return (
    <div className="modal-container fade-in" onClick={hideModal}>
      <div className="modal ">
        <div className="face-win">
          <Lottie animationData={face} style={style} />
        </div>
        <span class="text-xl block">¡Felicitaciones ganaste un premio de {name}!</span>
        <span class="text-sm block">stock restante: {remainingStock}</span>
      </div>
    </div>
  );
};

export default Modal;
