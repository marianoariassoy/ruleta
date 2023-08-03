type Stock = {
  id: number;
  name: string;
  stock: number;
};

type Props = {
  stock: Array<Stock> | undefined;
  setMenu: Function;
};

const Menu = ({ stock, setMenu }: Props) => {
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
      </div>
    </section>
  );
};

export default Menu;
