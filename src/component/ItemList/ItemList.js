import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            id={product.id}
            title={product.title}
            img={product.img}
            stock={product.stock}
          />
        );
      })}
    </>
  );
};
