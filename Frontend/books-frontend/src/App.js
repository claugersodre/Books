import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import { TableComponent } from './Components/TableComponent'
import { InputSearch } from './Components/ImputSearch'
import { ButtonSearch } from './Components/ButtonSearch'

function App() {
  const [books, setBooks] = useState([])

  const getBooks = () => {
    const url = "http://localhost:3001"
    try {
      fetch(url, {
        method: "GET",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        }
      }
      )
        .then((response) => response.json())
        .then((data) => {
          setBooks(data.BOOKS)
        })
    }
    catch (e) {
      console.log("erro no get", e)
    }
  }

  useEffect(() => {
    getBooks()
  }, [])

  const handleSearch = () => {
    alert("Limpar")
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    if (value.length) {
      setBooks(books.filter(book => book[name].toString().includes(value.toString())))
    } else {
      getBooks()
    }
    console.log("onchange", name, value)
  }

  return (
    <Container className="p-3">
      <h1>
        Página inicial
      </h1>
      <InputSearch name="Author" onChange={handleInputChange} />
      <InputSearch name="Title" onChange={handleInputChange} />
      <InputSearch name="Year" onChange={handleInputChange} />
      <InputSearch name="Pages" onChange={handleInputChange} />
      <ButtonSearch name="Limpar" variant="primary" onClick={handleSearch} />
      <TableComponent books={books} />
    </Container>
  )
}

export default App
