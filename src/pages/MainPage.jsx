import React, { useEffect } from 'react'
import { useFetchBooks } from '../apiFunctions/useFetchBooks'
import { useBookContext } from '../contexts/bookContext'
import axios from 'axios'
const MainPage = () => {
  const {books,setBooks} = useBookContext()
  const {loading,fetchedData,error} = useFetchBooks()
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

  const handleToggleStatus = async(e,bookId) => {
    e.preventDefault()
    const updateStatus = await axios.put('http://localhost:5000/books/updateStatus',{bookId})
    if(updateStatus.status === 200){
      setBooks((prevData) => prevData.map((data) => {
        if(data._id === bookId){
           return {...data, status: updateStatus.data.book.status}
        }else{
          return data
        }
      }))
    }else{
      console.log("unable to update status")
    }
  }
  console.log(books)
  return (
    <div className='container my-3'>
        <h4>All Books</h4>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        <ul>{books.length > 0  ? books.map((data) => <li className='my-3' key={data._id}><div className='d-flex gap-3'>Book Name: {data.name} - Author Name: {data.author} - Status: {data.status ? "Read" : "Unread"}
        <div className='d-flex gap-3'><button onClick={(e) => handleToggleStatus(e,data._id)} className='btn btn-info'>{data.status ? "Mark As Unread" : "Mark As Read"}</button>
        <button onClick={(e) => handleDeleteBook(e,data._id)} className='btn btn-danger'>Delete</button></div> </div></li>) : <p>No data</p>}</ul>
    </div>
  )
}

export default MainPage