import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getBooks } from "../store/booksSlice"

export const HomePage = () => {
    const books = useSelector((state) => state.books.books)
    const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  )
}
