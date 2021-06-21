import { useState, useEffect } from 'react';
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // console.log('run use effect');
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('oh oh spagetti O');
          // console.log('no dice');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
