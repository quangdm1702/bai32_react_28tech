import { useEffect, useState } from 'react';

function ProductState() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = () => {
      fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
          setProducts(data.products);
          setLoading(false);
        })
    }

    setTimeout(() => {
      fetchApi();
    }, 3000)

  }, []);

  console.log(loading);
  console.log(products);
  return (
    <>
      {loading ? (
        <div>Loading data</div>
      ) : (
        <ul>
          {products.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ProductState;