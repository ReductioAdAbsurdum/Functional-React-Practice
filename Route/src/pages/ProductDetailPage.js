import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  
  console.log(params);
  const productId = params.productId;
  console.log(productId);

  return (
    <section>
      <h1>Product detail</h1>
      <h2>{params.productId}</h2>
    </section>
  );
};

export default ProductDetailPage;
