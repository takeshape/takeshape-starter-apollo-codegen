import { gql } from '@apollo/client';

export const updateProductMutation = gql`
    mutation updateProduct{
    updateProduct(input:{
        _id:"df014bb1-a980-4949-8ef1-fb3a59b9751c"
        price:20
    }){
        result{
        _id
        price
        name
        }
    }
}`;