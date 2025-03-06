import React, { useEffect } from 'react'
import { useFetchBooks } from '../apiFunctions/useFetchBooks'
import { useBookContext } from '../contexts/bookContext'
import axios from 'axios'
const MainPage = () => {
  const {loading,fetchedData,error} = useFetchBooks()
  const {books,setBooks} = useBookContext()
  useEffect(() => {
    setBooks(fetchedData)
    localStorage.setItem("books",fetchedData)
  },[fetchedData,setBooks])

  const handleDeleteBook = (e,bookId) => {
    e.preventDefault()
    setBooks((prevData) => prevData.filter((data) => data._id !== bookId))
    const deleteBook = async() => {
     try{
      await axios.delete(`http://localhost:5000/books/deleteBook/${bookId}`)
      console.log("book deleted successfully")
     }catch(error){
      console.log("error occured",error.message)
     }
    }
    deleteBook()
  }
  return (
    <div className='container my-3'>
        <h4>All Books</h4>
        {loading && <p>Loading...</p>}
        <ul>{books  ? books.map((data) => <li key={data._id}><p>Book Name: {data.name} - Author Name: {data.author} <button onClick={(e) => handleDeleteBook(e,data._id)} className='btn btn-danger'>Delete</button> </p></li>) : <p>No data</p>}</ul>
    </div>
  )
}

export default MainPage