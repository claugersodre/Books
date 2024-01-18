import React from 'react'
import Table from 'react-bootstrap/Table'

export const TableComponent = ({ books }) => {
    return (
        <Table className="table table-striped table-dark" >
            <thead >
                <tr>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Pages</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.length > 0
                        ? books.map(book => (
                            <tr>
                                <td>{book.author}</td>
                                <td>{book.title}</td>
                                <td>{book.pages}</td>
                                <td>{book.year}</td>
                            </tr>
                        ))
                        : <tr>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                            <td>---</td>
                        </tr>
                }
            </tbody>
        </Table >
    )
}