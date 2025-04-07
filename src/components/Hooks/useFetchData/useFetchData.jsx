import { useState, useEffect } from 'react';


function useFetchData(dataUrl) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(dataUrl);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => setData(json))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, [url]);


  return { data, loading, error, setUrl };
}
export default useFetchData;
