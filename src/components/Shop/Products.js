import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const PRODUCTS = [
  {
    id: "p1",
    price: 1000,
    title: "Rich Dad Poor Dad",
    description: "Robert T. Kiyosaki",
  },
  {
    id: "p2",
    price: 2000,
    title: "Ikigai: The Japanese secret to a long and happy life",
    description: "Héctor García & Francesc Miralles",
  },
  {
    id: "p3",
    price: 3000,
    title: "How to win friends and influence people",
    description: "Dale Carnegie",
  },
  {
    id: "p4",
    price: 4000,
    title: "Nudge: Improving Decisions About Health, Wealth, and Happiness",
    description: "Richard H. Thaler & Cass R. Sunstein",
  },
  {
    id: "p5",
    price: 5000,
    title: "Think and Grow Rich",
    description: "Napolean Hill",
  },
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
