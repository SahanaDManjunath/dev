import styled from "styled-components";
import { ProductsDataItem } from "../../data";
import Product from "./Product";

const Container = styled.div`
   margin-top:50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {ProductsDataItem.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;