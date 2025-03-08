import axios from 'axios'
import React, { useState } from 'react'
import { useBookContext } from '../contexts/bookContext'

const AddBookPage = () => {
    const {books,setBooks} = useBookContext()
    const [bookName, setBookName] = useState('')
    const [authorName, setAuthorName] = useState('')

    const handleAddBook = async(e) => {
        e.preventDefault()
        const addBook = await axios.post('http://localhost:5000/books/addBook',{name: bookName, author: authorName})
        if(addBook.status === 201){
            setBooks((prevData) => [...prevData, addBook.data.book])
            console.log("Book added successfully")
            console.log(books)
        }else{
            console.log("error occured while adding book")
        }
    }
  return (
    <div className='container my-3'>
        <h3>Add Book</h3>
        <form onSubmit={(e) => handleAddBook(e)}>
            <label>Book Name: </label><input style={{"width" : "15rem" }} className='form-control' type='text' value={bookName} onChange={(e) => setBookName(e.target.value)}/>
            <label>Author Name: </label><input style={{"width" : "15rem" }} className='form-control' type='text' value={authorName} onChange={(e) => setAuthorName(e.target.value)}/>
            <button type='submit' className='btn btn-primary my-3'>Submit</button>
        </form>
    </div>
  )
}

export default AddBookPage