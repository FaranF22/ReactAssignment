import React from "react";
import { Col } from "react-bootstrap";
import Task from "./TaskUI";

const Tasks = ({ i }) => {
  // console.log(i);
  return (
    <div className="d-flex flex-lg-row flex-column justify-content-center mx-4">

      {i.map((item) => (
        <Col lg="6" md="12" className="mx-2 my-3">
          <Task
            title={item.title}
            description={item.description}
            status={item.status}
          />
        </Col>
      ))}
    </div>
  );
};

export default Tasks;
