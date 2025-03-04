import { createContext } from "react";

const BookContext = createContext()

export default BookContext

export const useBookContext = () => {
    return useBookContext(BookContext)
}