import db from '../utils/firebase.config';
import { useState, useEffect } from 'react';

function useFetchFirestore() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await db.collection('data');
    const data = await response.get();
    data.docs.map((item) => {
      setProducts((prevState) => {
        return [...prevState, { id: item.id, ...item.data() }];
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return products;
}

export default useFetchFirestore;
