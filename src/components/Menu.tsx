import { premios } from "../data/data";

type Stock = {
  id: number;
  name: string;
  stock: number;
};

type Props = {
  stock: Array<Stock> | undefined;
  setStock: Function;
  setMenu: Function;
};

const Menu = ({ stock, setStock, setMenu }: Props) => {
  const resetStock = () => {
    console.log("Stock reiniciado");
    setStock(premios);
  };

  return (
    <section className="fade-in menu" onClick={() => setMenu(false)}>
      <div className="menu-container text-sm">
        <ul>
          {stock!.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> - Stock: {p.stock}
            </li>
          ))}
        </ul>
        <button onClick={resetStock} className="hide">
          Reinciar
        </button>
      </div>
    </section>
  );
};

export default Menu;
