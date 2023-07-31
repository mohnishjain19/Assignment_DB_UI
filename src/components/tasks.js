import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import "./tasks.css";
import Button from 'react-bootstrap/Button';

const Tasks = (props) => {
    const [taskname, setTaskName] = useState("");
    const [tasktime, setTaskTime] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

       
        props.onAddTask(taskname, tasktime);

        setTaskName("");
        setTaskTime("");
    }

    return (
        <div>
            <h1 className="text-center d">Assignment UI/UX</h1>
            <Container className="D">
                <Row>
                    <Col>Task Name</Col>
                    <Col>Task Time</Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control
                            type="text"
                            value={taskname}
                            placeholder="Task Name"
                            onChange={(e) => setTaskName(e.target.value)}
                        />
                    </Col>
                    <Col>
                        <Form.Control
                            type="text"
                            value={tasktime}
                            placeholder="Task Time"
                            onChange={(e) => setTaskTime(e.target.value)}
                        />
                    </Col>
                </Row>
            </Container>
            <div className="center">
                <Button variant="danger" onClick={submitHandler}>Add Task</Button>
            </div>
        </div>
    );
}

export default Tasks;
