import axios from 'axios'
import { useEffect, useState } from 'react'
export const useFetchBooks = () => {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [fetchedData,setFetchedData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
            const { data } = await axios.get("https://book-management-backend-ten.vercel.app/books/books");
            setFetchedData(data.books);
          } catch (error) {
            console.error("Error occurred while fetching books:", error.message);
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    return {loading,error,fetchedData}
}