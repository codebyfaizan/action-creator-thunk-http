import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS = [
  { id: "p1", price: 1000, title: "Product 1", description: "D1" },
  { id: "p2", price: 2000, title: "Product 2", description: "D2" },
  { id: "p3", price: 3000, title: "Product 3", description: "D3" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
