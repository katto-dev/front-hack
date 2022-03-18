import { Item } from "../Item/Item";

export const ItemList = ({ products }) => {
  
  return (
    <>
      {products.map((product) => {
        return (
          <Item
            key={product._id}
            id={product._id}
            title={product.name}
            img={product.img}
          />
        );
      })}
    </>
  );
};
