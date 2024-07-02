import "./Products.css";
import Cards from "../components/Cards";

function Products({ result }) {
  return (
    <>
      <section className="card-container">
        {result.map((product) => (
          <Cards key={product.articleNo} product={product} />
        ))}
      </section>
    </>
  );
}

export default Products;
