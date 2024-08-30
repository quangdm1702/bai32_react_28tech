import { useEffect, useReducer } from 'react';

const init = {
  products: [],
  loading: true
};

const reducer = (state, action) => {
  if (action.type === 'success') {
    return {
      products: action.products,
      loading: false
    };
  } else {
    return state;
  }
}

function ProductReducer() {
  const [data, dispatch] = useReducer(reducer, init);

  useEffect(() => {
    const fetchApi = () => {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
          dispatch({
            type: 'success',
            products: data.products,
          });
          // setProducts(data.products);
          // setLoading(false);
        })
    }

    setTimeout(() => {
      fetchApi();
    }, 3000)

  }, []);

  console.log(data);
  return (
    <>
      {data.loading ? (
        <div>Loading data</div>
      ) : (
        <ul>
          {data.products.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ProductReducer;