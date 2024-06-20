import { useState, useEffect } from 'react';
import axiosInstance from './axiosInstance';

const useAxios = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let retryCount = 0;
    const maxRetries = 5;

    const fetchData = async () => {
      setLoading(true); // Ensure loading state is set when fetching starts
      try {
        const response = await axiosInstance.get(url, {
          ...options,
          signal,
        });
        setData(response.data);
        setError(null); // Reset error if request is successful
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Request canceled', error.message);
        } else if (error.response && error.response.status === 429 && retryCount < maxRetries) {
          retryCount += 1;
          const retryAfter = parseInt(error.response.headers['retry-after']) * 1000 || Math.pow(2, retryCount) * 1000;
          console.log(`Retrying request after ${retryAfter}ms`);
          setTimeout(fetchData, retryAfter);
        } else {
          setError(error);
        }
      } finally {
        setLoading(false); // Ensure loading state is reset when fetching ends
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, loading, error };
};

export default useAxios;
