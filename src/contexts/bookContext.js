import { createContext, useContext } from "react";

const BookContext = createContext()

export default BookContext

export const useBookContext = () => {
    return useContext(BookContext)
}