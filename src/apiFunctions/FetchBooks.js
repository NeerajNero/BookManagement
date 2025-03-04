import axios from 'axios'
import { useState } from 'react'
export const FetchBooks = async() => {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const [fetchedData,setFetchedData] = useState([])
    try{
        setLoading(true)
        const {data} = await axios.get('http://localhost:5000/books/books')
        console.log(data)
        setFetchedData(data)
    }catch(error){
        console.log("error occured while fetching books",error.message)
        setError(error.message)
    }finally{
        setLoading(false)
    }
    return {loading,error,fetchedData}
}