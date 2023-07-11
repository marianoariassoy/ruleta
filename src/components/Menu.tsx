// import { premios } from "../data/data";

type Props = {
  setMenu: Function;
  setStock: Function;
  stock: Array<any>;
};

const Menu = ({ stock }: Props) => {
  // const resetStock = () => {
  //   setStock(premios);
  //   console.log(stock);
  //   console.log(premios);
  // };

  return (
    <section className="fade-in menu">
      <div className="menu-container text-sm">
        <ul>
          {stock.map((p) => (
            <li key={p.id}>
              <strong>{p.name}</strong> - Stock: {p.stock}
            </li>
          ))}
        </ul>
        {/* <button onClick={resetStock}>Reinciar</button> */}
      </div>
    </section>
  );
};

export default Menu;
