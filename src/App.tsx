import './App.css';
import { useQuery } from "@apollo/client";
import { getProductListQuery } from './queries/getProductListQuery';
import { getProductList, getProductList_items } from './__generated__/getProductList';

function App() {

  const {loading, error, data} = useQuery<getProductList>(getProductListQuery);

  
  return (
    <div className="App">
      {loading && <h1>Loading, please wait...</h1>}
      {error && <h1>Failed to fetch TakeShape data</h1>}
      {
        data && (
          <>
            <h1>Products</h1>
            <ul>
              {data.getProductList?.items?.map(
                (item:getProductList_items|null)=>(
                  <li key={item?._id}>
                    <b>{item?.name}:</b>
                    {item?.price} ({item?._id})
                  </li>
                )
              )}
            </ul>
          </>
        )
      }
    </div>
  );
}

export default App;
