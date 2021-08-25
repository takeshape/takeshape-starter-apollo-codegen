import { gql } from "@apollo/client";

export const getProductListQuery = gql`
    query getProductList{
      getProductList{
        items{
          _id
          name
          price
        }
      }
    }
`;