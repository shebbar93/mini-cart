import styled from "styled-components";
import { PopularProductsType, popularProducts } from "../data";
import Product from "./Product";
const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((x) => (
        <Product product={x} key={x.id} />
      ))}
    </Container>
  );
};

export default Products;
