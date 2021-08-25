/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getProductList
// ====================================================

export interface getProductList_items {
  __typename: "Product";
  _id: string | null;
  name: string;
  price: number;
}

export interface getProductList_getProductList {
  __typename: "ProductPaginatedList";
  items: (getProductList_items | null)[] | null;
}

export interface getProductList {
  /**
   * Returns a list Product in natural order.
   */
  getProductList: getProductList_getProductList | null;
}
