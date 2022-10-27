import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Container, Card } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
        {/* <Container> */}
        <Container>

      <Card className="w-100 m-auto border border-bottom border-0 border-5 p-2">
        <Form>
          <Form.Group className="d-flex flex-wrap p-3">
            <Form.Label className="h4">Word</Form.Label>
            <Form.Control
              className="w-100"
              placeholder="example"
            ></Form.Control>
          </Form.Group>
        </Form>
      </Card>
      <Card className="w-100 mt-4 border  border-0 border-bottom h3 pb-2">
        Meaning
        </Card>
        <Card className="border-0" >...</Card>

        <Card className="w-100 mt-4 border  border-0 border-bottom h3 pb-2">
        Examples
        </Card>
        <Card className="border-0 " >...</Card>



        <Card className="w-100 mt-4 border  border-0 border-bottom h3 pb-2">
        Synonyms
        </Card>
        <Card className="border-0 " >...</Card>


</Container>
      {/* <Container className="p-1">aaa</Container> */}
        {/* </Container> */}
    </div>
  )
}

export default App
