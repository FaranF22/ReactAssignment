import React, { useState } from "react";
import "./style.css";
import { Button, Modal } from "react-bootstrap";

const Task = ({ title, description, status }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [s, setS] = useState(["ToDo"]);
  const [st, setSt] = useState(status);

  const checkStatus = () => {
    if (status === "ToDo") {
      setS(["InProgress"]);
    } else if (status === "inQA") {
      setS(["Done", "ToDo"]);
    } else if (status === "Blocked") {
      setS(["ToDo"]);
    } else if (status === "Done") {
      setS(["Deployed"]);
    } else if (status === "InProgress") {
      setS(["Blocked", "inQA"]);
    }
    // else if (status === "Deployed") {
    //   setS([]);
    // }
  };
  return (
    <div className="card text-center">
      <div className="overflow">
        <h3>{title}</h3>
      </div>
      <div className="card-body text-dark">
        <p>{description}</p>
      </div>

      <Button variant="primary" onClick={handleShow}>
        {status}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {s.map((item) => (
            <Button variant="primary" onClick={() => setSt(item)}>
              {item}
            </Button>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Task;
