import React, { useState } from "react";
import Tasks from "./Tasks";
import TaskUI from "./TaskUI";
import { Button, Form, Modal } from "react-bootstrap";

const Main = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const title1 = "";
  const description1 = "";
  const status1 = "ToDo";

  
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [c, setC] = useState(card);

  const addTask = () => {
    let card2 = {
      title: c1,
      description: c2,
      status: "ToDo",
      };
      setC(p => {
          return [
              ...p,card2
          ]
      })
  };

  return (
    <div className="justify-content-center">
      <Button variant="primary" onClick={handleShow}>
        Add task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task"
                onChange={(e) => setC1(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description"
                onChange={(e) => setC2(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addTask}>
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Tasks i={c} />
    </div>
  );
};
let card = [
    {
      title: "First",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, necessitatibus.",
      status: "ToDo",
    },
    {
      title: "second",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos, necessitatibus.",
      status: "ToDo",
    },
  ];
export default Main;
