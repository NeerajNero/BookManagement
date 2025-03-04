import { useState } from "react"
import BookContext from "./bookContext"

const BookContextProvider = ({children}) => {
    const [books,setBooks] = useState([])
  return (
    <BookContext.Provider value={{books,setBooks}}>
        {children}
    </BookContext.Provider>
  )
}

export default BookContextProvider